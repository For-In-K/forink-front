const ServiceMenu = () => {
  return (
    <div className="flex flex-col items-start">
      <p className="text-body mb-3 font-medium text-white">서비스</p>
      <ul className="space-y-2 text-sm text-slate-400">
        <li>
          <a href="/signin" className="hover:text-slate-200">
            정착 진단
          </a>
        </li>
        <li>
          <a href="/roadmap" className="hover:text-slate-200">
            로드맵 추천
          </a>
        </li>
        <li>
          <a href="/service3" className="hover:text-slate-200">
            가이드 매칭
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ServiceMenu;
