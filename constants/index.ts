export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};



export const IdentificationTypes = [
  "Aadhar Card",
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Passport",
  "Student ID Card",
  "Voter ID Card",
  "Pan Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Vitthalrao Deshmukh",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Suman More Patil",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Rajesh Deshpande",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Sreenivas Kulkarani",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Anil Pattewar",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Mayur Satkarani Patil",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Sujay Phadnavis",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Rashmika Nitesh Rane",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Kishore Mahesh Sirnaik",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
