import { Tag } from "lucide-react";

interface TagButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const TagButton: React.FC<TagButtonProps> = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
        active
          ? 'bg-blue-600 text-white shadow-md'
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
      }`}
    >
      {active && <Tag size={14} className="mr-2" />}
      {children}
    </button>
  );
};

export default TagButton;