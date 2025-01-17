import Image from 'next/image';
import headerImg from '/public/images/web_header_1.png';
import appleLogo from '/public/images/apple_store_logo.png';
import playStoreLogo from '/public/images/play_store_logo.png';
import hammer from '/public/images/hammer.png';
import phone1 from '/public/images/play_image_1.png';
import phone2 from '/public/images/play_image_2.png';
import two_bean from '/public/images/two_bean.png';
import image4 from '/public/images/img4.png';
import Link from 'next/link';
import { MdCheckCircle } from 'react-icons/md';
import { MdMoreHoriz } from 'react-icons/md';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <div>
      <section className="h-screen bg-bg">
        <Image
          src={headerImg}
          alt="별이 반짝이는 겨울 밤의 산 배경이미지입니다. 하늘색과 남색의 산들과 눈이 더해져 차가운 겨울 느낌을 줍니다."
          className="absolute bottom-0 w-screen"
        />
        <div className="items-center justify-center h-screen gap-30 inner md:items-start md:gap-16 md:justify-start md:pt-208">
          <div className="flex flex-row order-3 gap-10 md:gap-16 md:order-1">
            <StoreButton type="GOOGLE" />
            <StoreButton type="APPLE" />
          </div>
          <p className="order-1 text-center text-28 md:text-60 font-h1 md:text-left md:order-2">
            함께 성장하는
            <span className="block md:hidden" /> 즐거움을 선사할게요!
          </p>
          <p className="order-2 text-center text-14 md:text-32 font-h2 text-gray-2 md:text-left md:order-3">
            두런두런을 통해 친구들과 함께 도전하고
            <span className="block md:hidden" /> 하루하루 작은 성공을
            모아보세요.
          </p>
          <BoxItem top={62} left={10}>
            오늘은 한 걸음 더!
          </BoxItem>
          <BoxItem top={72} right={40}>
            챌린지를 생성해주세요!
          </BoxItem>
          <BoxItem top={52} right={20}>
            같이 달려보자!
          </BoxItem>
        </div>
      </section>

      <section className="h-full lg:h-1440">
        <div className="gap-56 pt-40 inner md:pt-176 md:gap-144">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 md:gap-90">
              <div className="flex flex-col gap-25">
                <h4 className="font-bold text-18 md:text-30 text-primary-1">
                  목표설정
                </h4>
                <h3 className="font-bold text-24 md:text-50">
                  목표를 간편하게 관리하세요!
                </h3>
                <p className="font-medium text-14 md:text-28 text-gray-1">
                  간단한 목표 설정 기능을 통해 하루를 계획하고 <br />
                  관리할 수 있어요. 매일 작은 목표를 설정하여 <br />
                  소소한 달성을 이루어 내고 나만의 루틴으로 만들어보세요!
                </p>
              </div>
              <div className="flex flex-col gap-16 md:gap-40">
                <ChallengeItem background />
                <ChallengeItem />
                <ChallengeItem background />
                <ChallengeItem />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 md:gap-86">
              <div className="flex justify-center order-2">
                <Image
                  src={phone1}
                  alt=""
                  className="w-5/6 md:w-3/4 lg:w-5/6 lg:ml-100"
                />
              </div>
              <div className="flex flex-col justify-center gap-16 md:gap-25 lg:order-2">
                <h4 className="text-bold font-h4 text-primary-1">
                  도전과 경쟁
                </h4>
                <h3 className="font-bold text-24 md:text-50">
                  친구들과 함께 도전하세요!
                </h3>
                <p className="font-medium text-14 md:text-28 text-gray-1">
                  캐릭터와 아이템을 통해 친구들과 상호작용하며
                  <br /> 더욱 즐겁게 챌린지를 수행할 수 있어요.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="h-full lg:h-928 bg-primary-2">
        <div className="inner pt-36 md:pt-176 lg:pt-0">
          <AnimatedSection>
            <div className="grid grid-cols-1 gap-56 lg:grid-cols-2 md:gap-86">
              <div className="flex flex-col justify-center gap-25">
                <h3 className="font-bold text-24 md:text-50">
                  친구들과 경쟁하며
                  <br /> 챌린지를 수행하세요!
                </h3>
                <p className="font-medium text-14 md:text-28">
                  챌린지의 진행도가 승부욕을 자극하여
                  <br /> 더욱 즐거운 챌린지가 될 거예요!
                </p>
              </div>
              <div className="relative flex justify-center lg:w-full">
                <Image
                  src={hammer}
                  alt=""
                  className="absolute right-0 hidden w-256 lg:block top-40 rotate-28"
                />
                <Image
                  src={phone2}
                  alt=""
                  className="relative w-3/4 lg:w-5/6 lg:top-176 lg:right-0"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="h-full lg:h-1600 pb-100 md:pb-0">
        <div className="gap-56 pt-56 inner md:pt-360 md:gap-144">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-90">
              <div className="flex flex-col gap-25">
                <h4 className="font-bold text-18 md:text-30 text-primary-1">
                  챌린지 공유
                </h4>
                <h3 className="font-bold text-24 md:text-50">
                  챌린지 완수하고
                  <br /> 친구들에게 자랑하세요!
                </h3>
                <p className="font-medium text-14 md:text-28 text-gray-1">
                  챌린지를 완수하면 주어지는 이미지를 통해 완수한 챌린지를
                  인증하고 공유할 수 있어요. 매일 작성하는 한 줄 일기로 오늘의
                  성공을 기록하고 친구들과 추억해 보세요.
                </p>
              </div>
              <div className="flex justify-center">
                <Image src={two_bean} alt="" className="w-3/4 lg:w-4/5" />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-86">
              <div className="flex justify-center order-2">
                <Image
                  src={image4}
                  alt=""
                  className="w-full md:w-3/4 lg:w-4/5"
                />
              </div>
              <div className="flex flex-col justify-center gap-25 lg:order-2">
                <h4 className="font-bold text-18 md:text-30 text-primary-1">
                  한 줄 일기
                </h4>
                <h3 className="font-bold text-24 md:text-50">
                  하루하루의 성공을
                  <br /> 기록하고 공유하세요!
                </h3>
                <p className="font-medium text-14 md:text-28 text-gray-1">
                  한 줄 일기를 통해 성공한 하루를 추억하고 친구들과 공유하여
                  나눌 수 있어요.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

const ChallengeItem = ({ background }: { background?: boolean }) => {
  return (
    <div className={`relative w-5/6 ${!background && 'self-end'}`}>
      <div className="relative z-10 flex items-center gap-12 p-12 rounded-lg md:py-16 bg-glass1 md:rounded-2xl shadow-glass">
        <MdCheckCircle size={24} color="#648CF3" />
        <p className="flex-1 font-medium text-16 md:text-24">챌린지 아이템</p>
        <MdMoreHoriz size={24} color="#B5B5B5" />
      </div>
      {background && (
        <div className="absolute z-0 w-full px-16 rounded-lg h-44 md:h-76 bg-primary3 md:rounded-2xl top-14 left-8 md:left-20"></div>
      )}
    </div>
  );
};

const BoxItem = ({
  children,
  top,
  left,
  right,
}: {
  children: string;
  top: number;
  left?: number;
  right?: number;
}) => {
  return (
    <div
      className="absolute justify-center hidden py-24 rounded-lg bg-glass1 w-285 shadow-rectangle md:flex"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        right: `${right}%`,
      }}>
      <p className="font-bold leading-6 text-primary-1 text-20">{children}</p>
    </div>
  );
};

const StoreButton = ({ type }: { type: 'APPLE' | 'GOOGLE' }) => {
  return (
    <Link
      href={
        type == 'APPLE'
          ? 'https://apps.apple.com/kr/app/%EB%91%90%EB%9F%B0%EB%91%90%EB%9F%B0-%EC%B9%9C%EA%B5%AC%EB%93%A4%EA%B3%BC-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%82%98%EA%B0%80%EB%8A%94-%EA%B0%93%EC%83%9D-%EB%9D%BC%EC%9D%B4%ED%94%84/id6475117435'
          : 'https://play.google.com/store/apps/details?id=com.clife'
      }
      target="_blank">
      <div className="flex items-center gap-10 p-8 pr-20 bg-white rounded-lg pl-18 shadow-glass md:p-12 md:pr-24 md:pl-28">
        <Image
          src={type == 'APPLE' ? appleLogo : playStoreLogo}
          alt={type == 'APPLE' ? 'App Store 로고' : 'Play Store 로고'}
          className={type == 'APPLE' ? 'w-20 md:w-28' : 'w-18 md:w-24'}
        />
        <p className="font-bold text-13 md:text-24">
          {type == 'APPLE' ? 'App Store' : 'Play Store'}
        </p>
      </div>
    </Link>
  );
};
