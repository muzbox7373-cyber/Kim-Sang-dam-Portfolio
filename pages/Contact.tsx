import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    category: 'management',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`감사합니다, ${formData.name}님. \n문의가 성공적으로 접수되었습니다.\n24시간 이내에 ${formData.email}로 답변 드리겠습니다.`);
    setFormData({ companyName: '', name: '', email: '', category: 'management', message: '' });
  };

  return (
    <div className="space-y-12">
       {/* Header */}
       <div className="border-b border-gray-200 pb-4">
        <h2 className="font-serif text-3xl text-primary font-bold">Request Consultation</h2>
        <p className="text-secondary text-sm mt-1">프로젝트 의뢰 및 상담 신청</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info & Prompt */}
        <div className="space-y-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">How can I help you?</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              귀사의 고민을 구체적으로 남겨주시면, 단순 견적이 아닌 
              <span className="font-bold text-primary"> '초기 진단 리포트'</span>를 메일로 보내드립니다.
            </p>
            <ul className="space-y-4 text-sm text-secondary">
              <li className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-full text-primary">
                  <Mail size={16} />
                </div>
                <span>consultant.kim@example.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-full text-primary">
                  <Linkedin size={16} />
                </div>
                <a href="#" className="hover:text-accent underline decoration-dotted">linkedin.com/in/kim-consulting</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-full text-primary">
                  <MapPin size={16} />
                </div>
                <span>Seoul, Gangnam-gu, Teheran-ro 123</span>
              </li>
            </ul>
          </div>

          <div className="rounded-sm overflow-hidden shadow-md">
             <img src="https://picsum.photos/600/400" alt="Office Desk" className="w-full h-48 object-cover opacity-80" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 border border-gray-100 rounded-sm shadow-inner">
          <div className="space-y-5">
            <div>
              <label htmlFor="companyName" className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border-b border-gray-300 bg-transparent py-2 px-1 focus:outline-none focus:border-accent focus:bg-white transition-all text-gray-800 placeholder-gray-400"
                placeholder="주식회사 한국"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 bg-transparent py-2 px-1 focus:outline-none focus:border-accent focus:bg-white transition-all text-gray-800 placeholder-gray-400"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 bg-transparent py-2 px-1 focus:outline-none focus:border-accent focus:bg-white transition-all text-gray-800 placeholder-gray-400"
                  placeholder="hello@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="category" className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">Inquiry Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border-b border-gray-300 bg-transparent py-2 px-1 focus:outline-none focus:border-accent focus:bg-white transition-all text-gray-800"
              >
                <option value="management">경영 전략 / 구조 개편</option>
                <option value="hr">인사 / 조직 문화</option>
                <option value="investment">투자 유치 / IR</option>
                <option value="other">기타 문의</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-white py-2 px-3 mt-1 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-gray-800 placeholder-gray-400 text-sm"
                placeholder="현재 겪고 계신 가장 큰 어려움이나 문의 내용을 자유롭게 적어주세요."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 mt-4 rounded-sm font-bold flex justify-center items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg"
            >
              <span>상담 신청하기</span>
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;