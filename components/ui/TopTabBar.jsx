const TopTabBar = () => {
  return (
    <div className="flex justify-center">
      <ul className="flex items-center divide-x divide-gray-300 bg-white p-5 rounded-md shadow">
        <li>
          <button className="px-6 py-3 text-xl rounded-md font-medium">Round Tip</button>
        </li>
        <li>
          <button className="px-6 py-3 text-xl bg-teal-600 text-white rounded-md font-medium">
            One Way
          </button>
        </li>
        <li>
          <button className="px-6 py-3 text-xl rounded-md font-medium">Multi City</button>
        </li>
      </ul>
    </div>
  );
};

export default TopTabBar;
