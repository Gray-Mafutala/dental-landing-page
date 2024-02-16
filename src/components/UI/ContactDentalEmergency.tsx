import telephoneIcon from "../../assets/svg/contact-phone.svg";

const ContactDentalEmergency = () => {
  return (
    <div
      className="flex items-center gap-x-4 whitespace-nowrap"
    >
      <img src={telephoneIcon} alt="" className="max-w-[64px]" />
      <div className="flex flex-col text-left">
        <span className="section-small-title">Dental 24H Emergency</span>
        <span className="text-violet-dark font-bold">03 482 394 123</span>
      </div>
    </div>
  );
};

export default ContactDentalEmergency;
