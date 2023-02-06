function Loading(): JSX.Element {
  return (
    <div className="absolute top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%]">
      <div className="w-10 h-10 border-l border-t border-solid rounded-full border-white animate-spin"></div>
    </div>
  );
}

export default Loading;
