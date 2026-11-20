export const logo = "/assets/gallery/39740951.jpeg";

const puppyNames = ["Olive", "Titan", "Gomora", "Nala", "Chloe", "Ultron", "Apollo", "Bella", "Bruno", "Daisy", "Duke", "Enzo", "Hazel", "Leo", "Mia"];
const adultNames = ["King", "Athena", "Atlas", "Nova", "Roman", "Vega", "Diesel", "Luna", "Maximus", "Nyx", "Orion", "Rocco", "Sasha", "Thor", "Zara"];
const breedingNames = ["Champion Pair I", "Champion Pair II", "Elite Foundation Pair", "Signature Litter", "Legacy Sire", "Legacy Dam", "Health-Tested Pair", "Conformation Pair", "Temperament Pair", "Proven Sire", "Proven Dam", "Future Champions", "Bloodline Study", "Pedigree Match", "Foundation Litter"];
const facilityNames = ["Main Kennel", "Indoor Playroom", "Puppy Nursery", "Whelping Suite", "Outdoor Exercise Yard", "Socialization Area", "Climate-Controlled Kennel", "Training Field", "Family Room", "Grooming Station", "Veterinary Check Area", "Secure Run", "Play Lawn", "Quiet Rest Area", "Breeder Family Grounds"];

const pexels = (id) => `/assets/gallery/${id}.jpeg`;

const puppyImages = [
  pexels(9868804), pexels(12656830), pexels(28951957), pexels(30398761),
  pexels(14738004), pexels(14743298), pexels(30781583), pexels(16304215),
  pexels(11557759), pexels(5029647), pexels(40362599), pexels(40362602),
  pexels(40362601), pexels(40362603), pexels(40362600),
];

const adultImages = [
  pexels(39740951), pexels(29063076), pexels(31738422), pexels(40362600),
  pexels(40362601), pexels(40362602), pexels(40362603), pexels(40362599),
  pexels(37365856), pexels(5365909), pexels(9470812), pexels(5029647),
  pexels(5802073), pexels(29093611), pexels(40362599),
];

const breedingImages = [
  pexels(35511907), pexels(20680840), pexels(33748348), pexels(13027575),
  pexels(15100850), pexels(34946114), pexels(27362138), pexels(25484511),
  pexels(15943144), pexels(6302310), pexels(33729543), pexels(11928034),
  pexels(30253731), pexels(24818997), pexels(8730429),
];

const facilityImages = [
  pexels(40231906), pexels(28536059), pexels(5482841), pexels(9956387),
  pexels(36653754), pexels(5731852), pexels(5733142), pexels(5255554),
  pexels(37107254), pexels(10013053), pexels(10013055), pexels(7474576),
  pexels(8491281), pexels(14174176), pexels(7516229),
];

const createItems = (names, category, images, descriptionTemplate) =>
  names.map((name, index) => ({
    name,
    description: descriptionTemplate(name, index),
    image: images[index % images.length],
    category,
  }));

export const galleryItems = [
  ...createItems(puppyNames, "Puppies", puppyImages, (name, index) =>
    `${name} is a ${index % 2 === 0 ? "bright, affectionate" : "confident, playful"} Cane Corso puppy raised in a family environment with early socialization, handling, and a strong foundation for lifelong companionship.`),
  ...createItems(adultNames, "Adults", adultImages, (name, index) =>
    `${name} is a ${index % 2 === 0 ? "well-balanced adult" : "sound, athletic adult"} Cane Corso with excellent structure, stable temperament, and the qualities we value in our family and breeding program.`),
  ...createItems(breedingNames, "Breeding", breedingImages, (name) =>
    `${name} represents careful Cane Corso pairing focused on health testing, proven temperament, breed-standard structure, and responsible pedigree improvement.`),
  ...createItems(facilityNames, "Facility", facilityImages, (name) =>
    `${name} is part of our clean, secure, climate-conscious environment, where the dogs receive supervised socialization, daily care, exercise, and attentive family-style handling.`),
];

export const testimonials = [
  {
    quote:
      "Our Corso from Perfect Cane Corsos has been an incredible family protector and companion. The breeding quality is exceptional and their support after purchase was outstanding.",
    name: "Michael Johnson",
    role: "Cane Corso Owner",
  },
  {
    quote:
      "I've worked with many Cane Corsos, and the dogs from this breeder consistently show excellent temperament and intelligence. They're a cut above the rest.",
    name: "Sarah Williams",
    role: "Dog Trainer",
  },
  {
    quote:
      "As a vet, I appreciate the health testing and care that goes into Perfect Cane Corsos' breeding program. Their puppies are among the healthiest I've seen.",
    name: "Robert Chen",
    role: "Veterinarian",
  },
];

export const features = [
  {
    icon: "health",
    title: "Health Guarantee",
    description:
      "All our puppies come with a comprehensive health guarantee and up-to-date vaccinations.",
  },
  {
    icon: "champion",
    title: "Champion Bloodlines",
    description:
      "We breed only from dogs with exceptional pedigrees and proven temperaments.",
  },
  {
    icon: "support",
    title: "Lifetime Support",
    description:
      "We provide ongoing support and advice for the lifetime of your Cane Corso.",
  },
];
