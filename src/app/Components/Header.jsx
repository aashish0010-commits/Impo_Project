import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // State to store user info
  const sidebarRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedFirstName = localStorage.getItem("firstName");
  
    if (token && storedFirstName) {
      setUser({ firstName: storedFirstName });
    } else {
      setUser(null);
    }
  }, []);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      isMenuOpen
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    setUser(null);
    router.push("/login-patient"); // Redirect to login page
  };

  return (
    <section className="fixed top-0 left-0 w-full bg-white shadow-md z-30">
      <div className="container mx-auto py-3 px-8 flex justify-between items-center">
        <a href="/" className="flex-shrink-0">
          <Image src="/images/front.png" alt="Logo" width={180} height={0} />
        </a>
        <div className="hidden md:flex flex-grow justify-end items-center gap-7">
          <ul className="flex gap-7 nav-item">
            {[
              "/company",
              "/our-solution",
              "/our-clients",
              "/career",
              "/smart-community",
            ].map((link) => (
              <li key={link}>
                <Link
                  href={link}
                  className={`hover:text-customPrimary transition-colors ${
                    activeLink === link
                      ? "text-customSecondary font-semibold"
                      : ""
                  }`}
                  onClick={() => setActiveLink(link)}
                >
                  {link.replace("/", "").replace("-", " ").toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/appointment"
            className="p-3 rounded-md bg-customDark text-white hover:bg-customSecondary text-xs transition-colors duration-500 ease-in-out"
          >
            <i className="bi bi-calendar2-minus-fill pr-2"></i>
            Book an Appointment
          </Link>
          {!user && (
            <Link
              href="/login-doctor"
              className="p-3 rounded-md bg-customDark text-white hover:bg-customSecondary text-xs transition-colors duration-500 ease-in-out ml-3"
            >
              Login as Doctor
            </Link>
          )}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-customPrimary">
                {user.firstName}
              </span>
              <i className="bi bi-person-circle text-2xl text-customPrimary"></i>
              <button
                onClick={handleLogout}
                className="p-2 bg-customDark text-white hover:bg-customSecondary rounded-md text-xs transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login-patient"
              className="p-3 bg-customDark text-white rounded-md hover:bg-customSecondary text-xs transition"
            >
              Login as Patient
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
