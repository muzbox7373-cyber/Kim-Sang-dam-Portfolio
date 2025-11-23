import React from 'react';
import { HistoryItem, SkillData } from '../types';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { Download } from 'lucide-react';

const historyData: HistoryItem[] = [
  {
    id: 1,
    period: '2020 - Current',
    role: '프리랜서 수석 컨설턴트',
    company: 'Independent',
    description: '시리즈 B 스타트업 조직문화 개편 주도 및 중견기업 디지털 전환(DX) 전략 자문 수행.',
  },
  {
    id: 2,
    period: '2015 - 2020',
    role: '책임 연구원',
    company: 'OO 경영연구소',
    description: '중소기업 경영 효율화 프로젝트 30건 수행. 제조/유통 분야 프로세스 혁신 전담.',
  },
  {
    id: 3,
    period: '2010 - 2015',
    role: '인사전략팀 매니저',
    company: 'XX 대기업',
    description: '그룹사 채용 프로세스 고도화 및 신규 입사자 온보딩 프로그램 기획.',
  },
];

const skillData: SkillData[] = [
  { subject: '전략 기획', A: 95, fullMark: 100 },
  { subject: 'HR 매니지먼트', A: 90, fullMark: 100 },
  { subject: '재무 분석', A: 80, fullMark: 100 },
  { subject: '리스크 관리', A: 85, fullMark: 100 },
  { subject: '커뮤니케이션', A: 95, fullMark: 100 },
  { subject: '데이터 분석', A: 75, fullMark: 100 },
];

const Resume: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-gray-200 pb-4">
        <div>
          <h2 className="font-serif text-3xl text-primary font-bold">Professional Experience</h2>
          <p className="text-secondary text-sm mt-1">경력 기술서 및 핵심 역량</p>
        </div>
        <button 
          className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors border border-gray-300 px-3 py-1.5 rounded-sm hover:border-primary"
          onClick={() => alert("PDF 다운로드 기능이 준비중입니다.")}
        >
          <Download size={14} />
          <span>Download PDF</span>
        </button>
      </div>

      {/* Core Competencies & Skills Chart */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-accent block"></span>
            Core Competency
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-1">01.</span>
              <div>
                <strong className="block text-gray-800">조직 구조 재설계 (Organization Design)</strong>
                <p className="text-sm text-gray-500 mt-1">비효율적인 보고 체계를 단순화하고 부서 간 R&R을 명확히 정의합니다.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-1">02.</span>
              <div>
                <strong className="block text-gray-800">KPI 수립 및 성과 관리</strong>
                <p className="text-sm text-gray-500 mt-1">정량적/정성적 지표를 믹스하여 공정한 평가 시스템을 구축합니다.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-1">03.</span>
              <div>
                <strong className="block text-gray-800">투자 유치 IR 자문</strong>
                <p className="text-sm text-gray-500 mt-1">투자자가 원하는 성장 스토리를 발굴하고 IR Deck을 고도화합니다.</p>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Radar Chart */}
        <div className="bg-gray-50 p-4 rounded-sm border border-gray-100 flex flex-col items-center justify-center h-[300px]">
          <h4 className="text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Skillset Overview</h4>
          <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#546E7A', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Capability"
                  dataKey="A"
                  stroke="#1A237E"
                  strokeWidth={2}
                  fill="#1A237E"
                  fillOpacity={0.2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Work History Timeline */}
      <section>
        <h3 className="font-serif text-xl font-bold mb-8 border-b border-gray-200 pb-2">Work History</h3>
        <div className="relative border-l-2 border-gray-200 ml-3 space-y-12">
          {historyData.map((item) => (
            <div key={item.id} className="relative pl-8 group">
              {/* Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-gray-300 group-hover:border-accent transition-colors"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                <h4 className="text-lg font-bold text-primary">{item.role}</h4>
                <span className="text-sm font-medium text-gray-500">@ {item.company}</span>
              </div>
              <span className="inline-block px-2 py-0.5 bg-gray-100 text-xs font-semibold text-secondary mb-3 rounded-sm">
                {item.period}
              </span>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h3 className="font-serif text-xl font-bold mb-6 border-b border-gray-200 pb-2">Education</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 border-l-4 border-primary">
                <p className="font-bold text-gray-800">조직심리학 박사 수료</p>
                <p className="text-sm text-gray-500">XX 대학교 대학원 (2018)</p>
            </div>
            <div className="p-4 bg-gray-50 border-l-4 border-secondary">
                <p className="font-bold text-gray-800">경영학 석사 (MBA)</p>
                <p className="text-sm text-gray-500">YY 경영전문대학원 (2012)</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;