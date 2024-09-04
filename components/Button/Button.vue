<template>
  <ColorButton
    textBg="bg-primary-opacity"
    title="Color Variation."
    text="Button Color"
    btnText="Histudy Button"
    classOne="rbt-button-area rbt-section-gap bg-color-white"
    btnClassOne=""
    btnClassTwo="btn-secondary"
    btnClassThree="btn-coral"
    btnClassFour="btn-violet"
    btnClassFive="btn-white"
    btnClassSix="btn-pink"
    :lastbtn="true"
  />
  <ColorButton
    textBg="bg-primary-opacity"
    title="Border Variation."
    text="Button Border"
    btnText="Histudy Button"
    classOne="rbt-button-area rbt-section-gapBottom bg-color-white"
    btnClassOne="btn-border square"
    btnClassTwo="btn-border"
    btnClassThree="btn-border radius-round-6"
    btnClassFour="btn-border  radius-round-10"
    btnClassFive="btn-border radius-round"
    :lastbtn="false"
  />

  <div class="rbt-button-area rbt-section-gap bg-color-darker">
    <div class="container">
      <SectionHead
        textBg="bg-white-opacity"
        title="Dark BG Border variation."
        text="Button Border"
      />
      <div class="row mt--50">
        <div class="col-lg-12">
          <div class="rbt-button-group">
            <a class="rbt-btn btn-border radius-round color-white-off" href="#">
              Histudy Button
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-button-area rbt-section-gap bg-color-white">
    <div class="container">
      <SectionHead
        textBg="bg-primary-opacity"
        title="Gradients Variation."
        text="Button Gradients"
      />
      <div class="row mt--50">
        <div class="col-lg-12">
          <div class="rbt-button-group">
            <a class="rbt-btn btn-gradient" href="#"> Gradient Button </a>
            <a class="rbt-btn btn-gradient btn-gradient-2" href="#">
              Gradient Button
            </a>
            <a class="rbt-btn btn-gradient btn-gradient-3" href="#">
              Gradient Button
            </a>
          </div>
          <div class="rbt-button-group mt--50">
            <a class="btn-underline-gradient" href="#"> Gradient Button </a>
            <a class="rbt-btn-a" href="#">
              Learn More<i class="feather-arrow-right"></i>
            </a>
            <a class="transparent-button" href="#">
              Learn More
              <i>
                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#27374D" fill="none" fillRule="evenodd">
                    <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                    <path strokeLinecap="square" d="M.663 5.572h14.594" />
                  </g>
                </svg>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-button-area rbt-section-gapBottom bg-color-white">
    <div class="container">
      <SectionHead
        textBg="bg-primary-opacity"
        title="Modern Variation."
        text="Button Modern"
      />
      <div class="row mt--50">
        <div class="col-lg-12">
          <div class="rbt-button-group">
            <a class="rbt-moderbt-btn" href="#">
              <span class="moderbt-btn-text">Modern Button</span>
              <i class="feather-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-button-area rbt-section-gapBottom bg-color-white">
    <div class="container">
      <SectionHead
        textBg="bg-primary-opacity"
        title="Hover Animation."
        text="Button Hover"
      />
      <div class="row mt--50">
        <HoverButton
          :mt="false"
          SwitchX="Switch X"
          SwitchY="Switch Y"
          MarqueeX="Marquee X"
          MarqueeY="Marquee Y"
          switchBtnOne="rbt-switch-btn"
          switchBtnTwo="rbt-switch-btn rbt-switch-y"
          marqueeBtnOne="rbt-marquee-btn"
          marqueeBtnTwo="rbt-marquee-btn marquee-text-y"
        />{{ " " }}
        <HoverButton
          :mt="true"
          SwitchX="Switch X"
          SwitchY="Switch Y"
          MarqueeX="Marquee X"
          MarqueeY="Marquee Y"
          switchBtnOne="btn-border rbt-switch-btn"
          switchBtnTwo="btn-gradient rbt-switch-btn rbt-switch-y"
          marqueeBtnOne="btn-white rbt-marquee-btn"
          marqueeBtnTwo="radius rbt-marquee-btn marquee-text-y"
        />
      </div>
    </div>
  </div>

  <div class="rbt-button-area rbt-section-gapBottom bg-color-white">
    <div class="container">
      <SectionHead
        textBg="bg-primary-opacity"
        title="Icon Hover Animation."
        text="Button Icon"
      />
      <div class="row mt--50">
        <div class="col-lg-12">
          <div class="rbt-button-group">
            <a class="rbt-btn icon-hover" href="#">
              <span class="btn-text">Histudy Button</span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
            </a>
            <a class="rbt-btn btn-gradient icon-hover" href="#">
              <span class="btn-text">Histudy Button</span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
            </a>
            <a class="rbt-btn btn-border icon-hover" href="#">
              <span class="btn-text">Histudy Button</span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
            </a>
            <a class="rbt-btn btn-white icon-hover" href="#">
              <span class="btn-text">Histudy Button</span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
            </a>
            <a class="rbt-btn btn-white radius icon-hover" href="#">
              <span class="btn-text">Histudy Button</span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-button-area rbt-section-gapBottom bg-color-white">
    <div class="container">
      <SectionHead
        textBg="bg-primary-opacity"
        title="Icon Hover Animation."
        text="Button Icon"
      />
      <div class="row mt--50">
        <div class="col-lg-12">
          <div class="rbt-button-group">
            <a class="rbt-btn hover-icon-reverse" href="#">
              <span class="icon-reverse-wrapper">
                <span class="btn-text">Histudy Button</span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
              </span>
            </a>
            <a class="rbt-btn btn-gradient hover-icon-reverse" href="#">
              <span class="icon-reverse-wrapper">
                <span class="btn-text">Histudy Button</span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
              </span>
            </a>
            <a class="rbt-btn btn-border hover-icon-reverse" href="#">
              <span class="icon-reverse-wrapper">
                <span class="btn-text">Histudy Button</span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
              </span>
            </a>
            <a class="rbt-btn btn-white hover-icon-reverse" href="#">
              <span class="icon-reverse-wrapper">
                <span class="btn-text">Histudy Button</span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
              </span>
            </a>
            <a class="rbt-btn btn-white radius hover-icon-reverse" href="#">
              <span class="icon-reverse-wrapper">
                <span class="btn-text">Histudy Button</span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-button-area rbt-section-gapBottom bg-color-white">
    <div class="container">
      <SectionHead
        textBg="bg-primary-opacity"
        title="Size Variation."
        text="Button Size"
      />
      <div class="row mt--50">
        <div class="col-lg-12">
          <div class="rbt-button-group">
            <a class="rbt-btn btn-sm" href="#"> Button SM </a>
            <a class="rbt-btn btn-md" href="#"> Button MD </a>
            <a class="rbt-btn" href="#"> Button MD </a>
            <a class="rbt-btn btn-lg" href="#"> Button LG </a>
            <a class="rbt-btn btn-xl" href="#"> Button XL </a>
            <a class="rbt-btn btn-xxl" href="#"> Button XXL </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-button-area rbt-section-gapBottom bg-color-white">
    <div class="container">
      <SectionHead
        textBg="bg-pink-opacity"
        title="Bg Color Variation."
        text="Button Bg Color"
      />
      <div class="row mt--50">
        <div class="col-lg-12">
          <div class="rbt-button-group">
            <a class="rbt-btn bg-primary-opacity" href="#"> Button Primary </a>

            <a class="rbt-btn bg-secondary-opacity icon-hover" href="#">
              <span class="btn-text">Button Secondary</span>
              <span class="btn-icon">
                <i class="feather-arrow-right"></i>
              </span>
            </a>

            <a class="rbt-btn bg-coral-opacity hover-icon-reverse" href="#">
              <span class="icon-reverse-wrapper">
                <span class="btn-text">Button Coral</span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
              </span>
            </a>

            <a class="rbt-btn bg-violet-opacity rbt-switch-btn" href="#">
              <span data-text="Button Violet">Button Violet</span>
            </a>

            <a class="rbt-btn bg-pink-opacity rbt-marquee-btn" href="#">
              <span data-text="Button Pink">Button Pink</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-button-area rbt-section-gapBottom bg-color-white">
    <div class="container">
      <SectionHead
        textBg="bg-pink-opacity"
        title="Gradient Button."
        text="Button Gradient"
      />
      <div class="row mt--50">
        <div class="col-lg-12">
          <div class="rbt-button-group">
            <a class="rbt-btn btn-border-gradient hover-icon-reverse" href="#">
              <span class="icon-reverse-wrapper">
                <span class="btn-text">Histudy Button</span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
                <span class="btn-icon">
                  <i class="feather-arrow-right"></i>
                </span>
              </span>
            </a>
            <a
              class="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient radius-round"
              href="#"
            >
              <span data-text="Histudy Button">Histudy Button</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-button-area rbt-section-gapBottom bg-color-white">
    <div class="container">
      <SectionHead
        textBg="bg-primary-opacity"
        title="Round Button."
        text="Round Button"
      />
      <div class="row mt--50">
        <div class="col-lg-12">
          <div class="rbt-button-group">
            <a
              class="rbt-btn rounded-player popup-video"
              data-vbtype="video"
              href="https://www.youtube.com/watch?v=gnZ10paNa-c"
            >
              <span>
                <i class="feather-play"></i>
              </span>
            </a>
            <a
              class="rbt-btn btn-border rounded-player popup-video"
              data-vbtype="video"
              href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
            >
              <span>
                <i class="feather-play"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-button-area rbt-section-gapBottom bg-color-white">
    <div class="container">
      <SectionHead
        textBg="bg-primary-opacity"
        title="Play Button With Image."
        text="Play Button"
      />
      <div class="row mt--50 row--30 gy-5">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="video-popup-wrapper">
            <nuxt-img
              class="w-100 rbt-radius"
              src="/images/others/video-01.jpg"
              alt="Video Images"
            />
            <a
              class="rbt-btn rounded-player-2 popup-video position-to-top with-animation"
              data-vbtype="video"
              href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
            >
              <span class="play-icon"></span>
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="video-popup-wrapper">
            <nuxt-img
              class="w-100 rbt-radius"
              src="/images/others/video-02.jpg"
              alt="Video Images"
            />
            <a
              class="rbt-btn rounded-player-2 popup-video position-to-top with-animation btn-theme-color"
              data-vbtype="video"
              href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
            >
              <span class="play-icon"></span>
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="video-popup-wrapper">
            <nuxt-img
              class="w-100 rbt-radius"
              src="/images/others/video-03.jpg"
              alt="Video Images"
            />
            <a
              class="rbt-btn rounded-player popup-video position-to-top"
              data-vbtype="video"
              href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
            >
              <span>
                <i class="feather-play"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="video-popup-wrapper">
            <nuxt-img
              class="w-100 rbt-radius"
              src="/images/others/video-04.jpg"
              alt="Video Images"
            />
            <a
              class="rbt-btn btn-white rounded-player popup-video position-to-top"
              data-vbtype="video"
              href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
            >
              <span>
                <i class="feather-play"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ColorButton from "./ButtonProps/ColorButton";
import HoverButton from "./ButtonProps/HoverButton";
import SectionHead from "./ButtonProps/SectionHead";
onMounted(() => {
  import("venobox/dist/venobox.min.js").then((venobox) => {
    new venobox.default({
      selector: ".popup-video",
    });
  });
});
</script>

<style lang="scss" scoped></style>
