import emailjs from "@emailjs/browser";

export const sendEnquiryEmail = async (formData) => {
  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    country: formData.country,
    product: formData.product,
    message: formData.message,
  };

  try {
    const response = await emailjs.send(
      "service_j45ypf5",
      "template_hayp4pd",
      templateParams,
      {
        publicKey: "F0iVLAFuaO699-BJf",
      }
    );

    console.log("Email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
};