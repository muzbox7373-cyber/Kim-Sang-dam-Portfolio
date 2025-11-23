import React, { useState } from 'react';
import { CaseStudy } from '../types';
import { ChevronDown, ChevronUp, Trophy, TrendingUp } from 'lucide-react';

const casesData: CaseStudy[] = [
  {
    id: 1,
    client: 'A사 (제조업, 매출 100억)',
    industry: 'Manufacturing',
    problem: '급격한 인원 증가로 인한 부서 간 소통 부재 발생. 비효율적인 보고 체계로 의사결정 지연, 핵심 인재 퇴사율 20% 육박.',
    solution: '직급 체계를 5단계에서 3단계로 단순화 및 성과 기반 보상 시스템(Incentive Scheme) 도입. 주간 타운홀 미팅 정례화로 소통 채널 확보.',
    result: '퇴사율 5%대로 감소, 생산 효율성 증대로 영업이익 12% 개선 달성.',
  },
  {
    id: 2,
    client: 'B사 (IT 스타트업)',
    industry: 'Tech / SaaS',
    problem: '공동 창업자(C-Level) 간의 경영 전략 불일치로 인한 투자 유치(Series A) 난항. 명확한 성장 로드맵 부재.',
    solution: '3일간의 비전 워크샵(Vision Workshop) 진행을 통해 핵심 가치 합의. 3개년 중장기 로드맵 수립 및 투자자 맞춤형 IR Deck 스토리텔링 재구성.',
    result: '벤처캐피탈(VC) 3곳으로부터 총 30억 규모의 Series A 투자 유치 성공.',
  },
];

const Cases: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-12">
       {/* Header */}
       <div className="border-b border-gray-200 pb-4">
        <h2 className="font-serif text-3xl text-primary font-bold">Project Case Studies</h2>
        <p className="text-secondary text-sm mt-1">주요 컨설팅 성공 사례 (Before & After)</p>
      </div>

      <div className="space-y-6">
        {casesData.map((item) => (
          <div 
            key={item.id} 
            className={`border transition-all duration-300 ${
              openId === item.id ? 'border-primary shadow-md bg-white' : 'border-gray-200 bg-gray-50 hover:bg-white'
            }`}
          >
            {/* Header / Trigger */}
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-wider mb-1 block">
                  Case 0{item.id} — {item.industry}
                </span>
                <h3 className={`font-serif text-xl font-bold ${openId === item.id ? 'text-primary' : 'text-gray-700'}`}>
                  {item.client}
                </h3>
              </div>
              <div className={`transform transition-transform duration-300 ${openId === item.id ? 'rotate-180 text-primary' : 'text-gray-400'}`}>
                {openId === item.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
            </button>

            {/* Content */}
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openId === item.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 pt-0 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  {/* Problem */}
                  <div className="bg-red-50 p-4 rounded-sm border-l-4 border-red-200">
                    <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2 text-sm uppercase">
                      Problem
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-blue-50 p-4 rounded-sm border-l-4 border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2 text-sm uppercase">
                      Solution
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="bg-green-50 p-4 rounded-sm border-l-4 border-green-200 shadow-sm">
                    <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2 text-sm uppercase">
                      <Trophy size={16} /> Result
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      {item.result}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                   <img 
                    src={item.id === 1 ? "https://picsum.photos/800/400?random=1" : "https://picsum.photos/800/400?random=2"} 
                    alt="Case Study Context" 
                    className="w-full h-48 object-cover rounded-sm opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                   />
                   <p className="text-xs text-right text-gray-400 mt-2 italic">* 클라이언트 보안을 위해 일부 정보는 각색되었습니다.</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary/5 p-8 text-center rounded-sm border border-primary/10 mt-8">
        <TrendingUp className="mx-auto text-primary mb-4" size={32} />
        <h3 className="font-serif text-xl font-bold text-primary mb-2">귀사의 성공 사례를 만들어갈 준비가 되셨나요?</h3>
        <p className="text-secondary text-sm mb-6">비슷한 고민을 하고 계시다면, 주저하지 말고 문의해주세요.</p>
        {/* Note: This mimics a navigation to Contact page */}
        <a href="#/contact" className="inline-block px-6 py-3 bg-primary text-white font-medium text-sm rounded-sm hover:bg-primary/90 transition-colors shadow-md">
          무료 진단 신청하기
        </a>
      </div>
    </div>
  );
};

export default Cases;