interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  detail: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, detail }) => {
  return (
    <div className="flex items-start">
      <div className="mr-4 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-gray-700 dark:text-gray-300">{detail}</p>
      </div>
    </div>
  );
};
export default ContactItem