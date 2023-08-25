function ExpForSmallSize({ showAnimations, arrowTimer }: ExpArrowProps) {
  return (
    <div
      className={`absolute bottom-14 w-full text-base sm:text-lg flex flex-col justify-center items-center lg:hidden ${
        arrowTimer < 5 && 'transition-all duration-1000 delay-2000 ease-in-out'
      } ${
        showAnimations
          ? 'p-2 opacity-100 blur-none bg-gray-200 bg-opacity-25 rounded-2xl animate-bounce'
          : 'opacity-0 blur-2xl'
      }`}
    >
      <div>
        <h1>📼 Video ➡ You can see videos and its channels</h1>
        <h1>🔍 Search ➡ You can search videos </h1>
        <h1>💾 Watch later ➡ You can save videos here</h1>
        <h1>🕛 History ➡ You can see all videos you watched</h1>
      </div>
    </div>
  );
}

export default ExpForSmallSize;
