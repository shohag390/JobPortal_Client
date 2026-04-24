import image from "../../assets/images/about-us-img1.jpg";

const AboutPlatform = () => {
  return (
    <div className="px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18 about-us flex lg:flex-row flex-col-reverse gap-10 md:gap-15 lg:gap-20 items-center justify-between">
      <div
        data-aos="fade-up"
        className="w-full lg:w-1/2 lg:flex lg:justify-end"
      >
        <img className="rounded-2xl w-full" src={image} alt="" />
      </div>
      <div data-aos="fade-up" className="w-full lg:w-1/2">
        <h1 className="font-semibold md:font-bold text-[32px] md:text-[45px] lg:text-[50px] leading-10 md:leading-12 lg:leading-14 pt-3 md:pt-4 lg:pt-5">
          Our Perfect Platform
        </h1>
        <p className="py-3 md:py-4 lg:py-5 text-[14px] md:text-[16px] text-[#64748b] text-justify">
          Doctus omnesque duo ne, cu vel offendit erroribus. Laudem hendrerit
          pro ex, cum postea delectus ad. Te pro feugiat perpetua tractatos. Nam
          movet omnes id, usu te meis corpora. Augue doming quaestio vix at.
          Sumo duis ea sed, ut vix euismod lobortis prodesset, everti
          necessitatibus mei cu.
        </p>
        <p className="pb-3 md:pb-4 lg:pb-5 text-[14px] md:text-[16px] text-[#64748b] text-justify">
          Nam ea eripuit assueverit, invenire delicatissimi ad pro, an dicam
          principes duo. Paulo prodesset duo ad. Duo eu summo verear. Natum
          gubergren definitionem id usu, graeco cetero ius ut.
        </p>
        <p className="pb-3 md:pb-4 lg:pb-5 text-[14px] md:text-[16px] text-[#64748b] text-justify">
          Unum postea sit an, iudico invenire expetenda ei sea, atqui fierent
          sed ut. Ex pri numquam indoctum suavitate, sed id movet mentitum
          consequat, cum et amet ipsum dolor. Unum postea sit an, iudico
          invenire expetenda ei sea, atqui fierent sed ut.
        </p>
      </div>
    </div>
  );
};

export default AboutPlatform;
