interface CategoryButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full transition-all duration-300 ${
        active
          ? 'bg-blue-600 text-white-500 shadow-md'
          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
      }`}
    >
      {children}
    </button>
  );
};

export default CategoryButton;