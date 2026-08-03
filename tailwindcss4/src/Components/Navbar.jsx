import "./Navbar.css";
import "./AboutContainer.css";
import NavbarLink from "./NavbarLink";
import NotifSystem from "./NotifSystem";
import NotifContent from "./NotifContent";

const Navbar = ({
  homeRef,
  aboutRef,
  servicesRef,
  experienceRef,
  skillsRef,
  projectsRef,
  contactRef,
  setOpenNotif,
}) => {
  return (
    <div
      className=" animate-upper-slide h-[60%] w-[85%] pl-5  bg-[#181717] opacity-100 rounded-3xl  font-Jost z-50 text-white flex justify-between
    max-md:justify-center max-sm:pl-0 max-sm:pr-0 max-sm:w-[95%]"
    >
      <div className="flex items-center">
        <NotifSystem setOpenNotif={setOpenNotif} />
      </div>

      <NavbarLink
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
    </div>
  );
};

export default Navbar;
