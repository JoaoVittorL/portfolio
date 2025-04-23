interface NavLinksProps {
  mobile?: boolean;
  onClose?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ mobile, onClose }) => {
  const links = [
    { href: "#hero", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" }
  ];

  const handleClick = () => {
    if (onClose) onClose();
  };

  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={handleClick}
          className={`transition-all duration-300 relative group ${
            mobile 
              ? 'block py-3 text-gray-800 dark:text-white-500 hover:text-blue-600 dark:hover:text-blue-400' 
              : 'text-gray-800 dark:text-white-500 hover:text-blue-600 dark:hover:text-blue-400'
          }`}
        >
          {link.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
    </>
  );
};
export default NavLinks;