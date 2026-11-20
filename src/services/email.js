import emailjs from "@emailjs/browser";

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  recipient: import.meta.env.VITE_RECIPIENT_EMAIL,
};

export async function sendEnquiry(form, formType) {
  const missingSettings = Object.entries(emailConfig)
    .filter(([, value]) => !value?.trim())
    .map(([key]) => key);

  if (missingSettings.length) {
    throw new Error(
      `Email delivery is not configured. Set ${missingSettings.join(", ")} in your .env file.`,
    );
  }

  const values = Object.fromEntries(new FormData(form).entries());
  const fullName = values.name ?? values.full_name ?? "";
  const message = [
    ...Object.entries(values)
      .filter(([key]) => !["message", "details"].includes(key))
      .map(([key, value]) => `${key.replaceAll("_", " ")}: ${value}`),
    `Message: ${values.message ?? values.details ?? ""}`,
  ].join("\n");

  return emailjs.send(
    emailConfig.serviceId,
    emailConfig.templateId,
    {
      ...values,
      to_email: emailConfig.recipient,
      form_type: formType,
      from_name: fullName,
      reply_to: values.email ?? "",
      subject: values.subject || `${formType} from ${fullName}`,
      message,
    },
    { publicKey: emailConfig.publicKey },
  );
}
