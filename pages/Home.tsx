import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Intro Section */}
      <section className="space-y-6">
        <div className="relative">
          <h2 className="font-serif text-4xl text-primary font-bold leading-tight mb-4">
            데이터로 진단하고<br />
            <span className="text-accent">전략으로 해결합니다.</span>
          </h2>
          <div className="h-1 w-20 bg-primary mt-6 mb-8"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-2/3 space-y-4 text-secondary leading-relaxed">
            <p className="text-lg font-medium text-gray-800">
              안녕하세요. 기업 전문 컨설턴트 김상담입니다.
            </p>
            <p>
              15년 간 50개 이상의 중소·스타트업의 인사/경영 난제를 해결해 왔습니다. 
              막연한 조언이 아닌, 실행 가능한 전략을 제안하여 클라이언트의 
              실질적인 성장을 이끌어냅니다.
            </p>
            <p>
              조직 구조 재설계부터 투자 유치 전략까지, 귀사의 다음 단계를 위한 
              확실한 파트너가 되어드리겠습니다.
            </p>
          </div>
          <div className="md:w-1/3 w-full">
            <img 
              src="https://picsum.photos/400/500" 
              alt="Kim Sang-dam Portrait" 
              className="w-full h-auto shadow-md grayscale hover:grayscale-0 transition-all duration-500 object-cover rounded-sm border border-gray-200"
            />
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-gray-100">
        <div className="p-6 bg-gray-50 rounded-sm text-center group hover:bg-primary hover:text-white transition-colors duration-300">
          <div className="flex justify-center mb-3 text-accent">
            <CheckCircle size={32} />
          </div>
          <h3 className="text-3xl font-serif font-bold mb-1">200+</h3>
          <p className="text-sm font-medium tracking-wide">누적 컨설팅 수행</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-sm text-center group hover:bg-primary hover:text-white transition-colors duration-300">
          <div className="flex justify-center mb-3 text-accent">
            <TrendingUp size={32} />
          </div>
          <h3 className="text-3xl font-serif font-bold mb-1">150%</h3>
          <p className="text-sm font-medium tracking-wide">평균 매출 성장률</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-sm text-center group hover:bg-primary hover:text-white transition-colors duration-300">
          <div className="flex justify-center mb-3 text-accent">
            <Users size={32} />
          </div>
          <h3 className="text-3xl font-serif font-bold mb-1">85%</h3>
          <p className="text-sm font-medium tracking-wide">재계약율</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col gap-4">
        <h3 className="font-serif text-xl text-primary font-bold border-l-4 border-accent pl-3">
          Explore Portfolio
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <Link to="/cases" className="block p-6 border border-gray-200 hover:border-accent hover:shadow-md transition-all group">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-gray-800 group-hover:text-primary">성공 사례 확인하기</span>
              <ArrowRight size={18} className="text-gray-400 group-hover:text-accent transform group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-sm text-gray-500 line-clamp-2">
              제조업 매출 12% 개선 및 스타트업 시리즈 A 투자 유치 성공 사례를 확인해보세요.
            </p>
          </Link>
          <Link to="/contact" className="block p-6 bg-primary text-white shadow-md hover:bg-primary/90 transition-colors">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">상담 신청하기</span>
              <ArrowRight size={18} className="text-accent transform group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-sm text-gray-300">
              현재 상황을 남겨주시면 24시간 이내에 초기 진단을 보내드립니다.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;