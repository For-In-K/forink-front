const SupportMenu = () => {
  return (
    <div className="flex flex-col items-start">
      <p className="text-body mb-3 font-medium text-white">지원</p>
      <ul className="space-y-2 text-sm text-slate-400">
        <li>
          <a href="/" className="hover:text-slate-200">
            도움말
          </a>
        </li>
        <li>
          <a href="/" className="hover:text-slate-200">
            문의하기
          </a>
        </li>
        <li>
          <a href="/" className="hover:text-slate-200">
            자주 묻는 질문
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SupportMenu;
