import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { createGuideResume } from '@apis/resume';
import { createUserExam } from '@apis/exams';
import { Users, UserCheck, ArrowRight, Heart } from 'lucide-react';

interface RoleOption {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  color: 'primary' | 'secondary';
  features: string[];
  benefits: string;
  buttonText: string;
  onClick: () => void;
}

const SigninOptionButtonsGroup = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState<string | null>(null);

  const { mutate: createResume } = useMutation({
    mutationFn: createGuideResume,
    onSuccess: () => {
      toast.success('Guide resume created successfully');
      navigate('/resume/step/1');
    },
    onError: (error: Error) => {
      toast.error('Error creating guide resume');
    },
  });

  const { mutate: createExam } = useMutation({
    mutationFn: createUserExam,
    onSuccess: () => {
      toast.success('Exam created successfully');
      navigate('/exams/step/1');
    },
    onError: (error: Error) => {
      toast.error('Error creating exam');
    },
  });

  const roles: RoleOption[] = [
    {
      id: 'forink',
      title: 'Foreigners in Korea',
      subtitle: 'ForinK',
      description: '외국인들을 위한 한국 정착 및 생활 가이드 플랫폼',
      icon: Users,
      color: 'primary',
      features: ['개인화된 정착 로드맵', '전문 가이드 매칭', '행정 절차 안내'],
      benefits: '체계적인 정착 과정을 통해 한국 생활에 빠르게 적응하세요.',
      buttonText: 'ForinK 시작하기',
      onClick: () => createExam(),
    },
    {
      id: 'guide',
      title: 'Professional Guide',
      subtitle: 'Guide',
      description: '외국인들의 한국 정착을 도와주는 전문 가이드 및 멘토',
      icon: UserCheck,
      color: 'secondary',
      features: ['전문 분야 등록', '외국인과 매칭', '수입 기회 창출'],
      benefits: '전문성을 활용해 외국인을 도우며 의미 있는 활동에 참여하세요.',
      buttonText: '가이드로 참여하기',
      onClick: () => createResume(),
    },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="grid gap-8 md:grid-cols-2">
        {roles.map((role) => {
          const Icon = role.icon;
          const isSelected = selectedRole === role.id;
          const isHovered = isHovering === role.id;

          return (
            <div
              key={role.id}
              className={`group border-0.5 relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 ${
                isSelected
                  ? `ring-2 ${role.color === 'primary' ? 'ring-primary border-primary' : 'ring-secondary border-secondary'} scale-105 shadow-2xl`
                  : isHovered
                    ? 'scale-102 border-gray-300 shadow-xl'
                    : 'border-gray-200 shadow-lg hover:shadow-xl'
              }`}
              onClick={() => {
                setSelectedRole(role.id);
                role.onClick();
              }}
              onMouseEnter={() => setIsHovering(role.id)}
              onMouseLeave={() => setIsHovering(null)}
            >
              <div
                className={`absolute inset-0 ${
                  role.color === 'primary' ? 'bg-[#f7fcff]' : 'bg-[#fcfefc]'
                }`}
              />

              {isSelected && (
                <div
                  className={`absolute top-4 right-4 h-6 w-6 ${
                    role.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                  } flex items-center justify-center rounded-full`}
                >
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              )}

              <div className="relative p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={`h-16 w-16 ${
                      role.color === 'primary'
                        ? 'from-primary bg-gradient-to-r to-blue-600'
                        : 'from-secondary bg-gradient-to-r to-green-600'
                    } flex items-center justify-center rounded-2xl shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div
                    className={`${
                      role.color === 'primary'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-secondary/10 text-secondary'
                    } rounded-full px-3 py-1 text-sm font-medium`}
                  >
                    {role.subtitle}
                  </div>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {role.title}
                </h3>
                <p className="mb-6 text-gray-600">{role.description}</p>

                <div className="mb-6 space-y-3">
                  {role.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`h-2 w-2 ${
                          role.color === 'primary'
                            ? 'bg-primary'
                            : 'bg-secondary'
                        } rounded-full`}
                      />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div
                  className={`p-4 ${
                    role.color === 'primary' ? 'bg-primary/5' : 'bg-secondary/5'
                  } mb-6 rounded-lg`}
                >
                  <div className="flex items-start space-x-2">
                    <Heart
                      className={`h-4 w-4 ${
                        role.color === 'primary'
                          ? 'text-primary'
                          : 'text-secondary'
                      } mt-0.5 flex-shrink-0`}
                    />
                    <p className="text-sm text-gray-700">{role.benefits}</p>
                  </div>
                </div>

                <button
                  className={`w-full ${
                    role.color === 'primary'
                      ? 'bg-primary hover:bg-primary/90'
                      : 'bg-secondary hover:bg-secondary/90'
                  } flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-all duration-200 group-hover:scale-105`}
                  onClick={(e) => {
                    e.stopPropagation();
                    role.onClick();
                  }}
                >
                  {role.buttonText}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SigninOptionButtonsGroup;
