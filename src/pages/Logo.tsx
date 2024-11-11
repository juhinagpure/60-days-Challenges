import logoImage from "../assets/Images/logo.webp";
const logo = () => {
  return (
    <div className="logo h-16 w-16">
      <img src={logoImage} alt="" className="src" />
    </div>
  );
};

export default logo;
