import { useNavigate } from 'react-router-dom';
import { resumeQuestions } from '@constants/resume';
import { useResumeStore } from '@stores/useResumeStore';

const ResumeFinalViewPage = () => {
  const navigate = useNavigate();
  const answers = useResumeStore((state) => state.answers);

  return (
    <div className="flex flex-col items-center px-8 py-12">
      <h2 className="mb-8 text-2xl font-bold">최종 이력서 검토</h2>
      <div className="w-full max-w-2xl space-y-6">
        {resumeQuestions.map((q) => (
          <div
            key={q.questionId}
            className="flex flex-col rounded-lg bg-white p-4 shadow md:flex-row md:items-center md:justify-between"
          >
            <div>
              <div className="font-semibold">{`Q${q.questionId}. ${q.questionTitle}`}</div>
              <div className="mt-2 text-gray-700">
                {answers[q.questionId] || (
                  <span className="text-gray-400">미응답</span>
                )}
              </div>
            </div>
            <button
              className="mt-3 rounded bg-sky-500 px-4 py-2 text-white transition hover:bg-sky-600 md:mt-0"
              onClick={() => navigate(`/resume/step/${q.questionId}`)}
            >
              수정
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeFinalViewPage;
