import { Container } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Clientes() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",
    arrows: false,
    focusOnSelect: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <h1>NOSSOS CLIENTES</h1>
      <Slider
        {...settings}
        style={{ width: "75%" }}
        autoplay={true}
        autoplaySpeed={500}
        adaptiveHeight={true}
      >
        <div>
          <img src="https://coolhuntersagency.com/wp-content/uploads/2020/12/Coolhunters_Site_logotipos_0000s_0000s_0006_cavana-2.png" />
        </div>
        <div>
          <img src="https://coolhuntersagency.com/wp-content/uploads/2020/12/Coolhunters_Site_logotipos_0000s_0000s_0008_espacophysio-2.png" />
        </div>
        <div>
          <img src="https://coolhuntersagency.com/wp-content/uploads/2020/12/Coolhunters_Site_logotipos_0000s_0000s_0009_native-2.png" />
        </div>
        <div>
          <img src="https://coolhuntersagency.com/wp-content/uploads/2020/12/Coolhunters_Site_logotipos_0000s_0000s_0010_quadradinho-2.png" />
        </div>
        <div>
          <img src="https://coolhuntersagency.com/wp-content/uploads/2020/12/Coolhunters_Site_logotipos_0000s_0000_Camada-1.png" />
        </div>
        <div>
          <img src="https://coolhuntersagency.com/wp-content/uploads/2020/12/Coolhunters_Site_logotipos_0000s_0000s_0000_viniciusalencar.png" />
        </div>
        <div>
          <img src="https://coolhuntersagency.com/wp-content/uploads/2020/12/Coolhunters_Site_logotipos_0000s_0000s_0001_quiosquedonem_logoAtivo-4.png" />
        </div>
        <div>
          <img src="https://coolhuntersagency.com/wp-content/uploads/2020/12/Coolhunters_Site_logotipos_0000s_0000s_0002_emporiosobrerodas.png" />
        </div>
        <div>
          <img src="https://coolhuntersagency.com/wp-content/uploads/2020/12/Coolhunters_Site_logotipos_0000s_0000s_0003_graciebarra.png" />
        </div>
        <div>
          <img src="https://coolhuntersagency.com/wp-content/uploads/2020/12/Coolhunters_Site_logotipos_0000s_0000s_0004_0012Ativo-1.png" />
        </div>
      </Slider>
    </Container>
  );
}

export default Clientes;
