/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-use-before-define */
/* global Image */
/* global document */
/* global FileReader */


class Canvas {
  constructor({ state, condition, imgParams }) {
    this.state = state;
    this.imgWidth = this.state.images.imgWidth;
    this.condition = condition;
    this.height1 = imgParams.height1;
    this.height2 = imgParams.height2 || 0;
    this.height3 = imgParams.height3 || 0;
    this.width1 = imgParams.width1;
    this.width2 = imgParams.width2 || 0;
    this.width3 = imgParams.width3 || 0;
    this.imgHeight = this.state.images.imgHeight;
    this.twoImg = this.state.images.two;
    this.oneImg = this.state.images.one;
    this.threeImg = this.state.images.three;
    this.ctx = this.state.ctx;
    this.canvas = this.state.canvas;
  }

  drawHorFirst() {
    this.clearCanvas();
    this.changeHorSizeCanvas();
    this.ctx.drawImage(this.oneImg, 0, 0, this.width1, this.imgHeight);
  }

  drawHorFirstWhithSecond() {
    this.clearCanvas();
    this.changeHorSizeCanvas();
    this.ctx.drawImage(this.oneImg, 0, 0, this.width1, this.imgHeight);
    this.ctx.drawImage(this.twoImg, this.width1, 0, this.width2, this.imgHeight);
  }

  drawHorFirstWhithThird() {
    this.clearCanvas();
    this.changeHorSizeCanvas();
    this.ctx.drawImage(this.oneImg, 0, 0, this.width1, this.imgHeight);
    this.ctx.drawImage(this.threeImg, this.width1, 0, this.width2, this.imgHeight);
  }

  drawHorSecondWithFirst() {
    this.clearCanvas();
    this.changeHorSizeCanvas();
    this.ctx.drawImage(this.oneImg, 0, 0, this.width2, this.imgHeight);
    this.ctx.drawImage(this.twoImg, this.width2, 0, this.width1, this.imgHeight);
  }

  drawHorSecondWithThird() {
    this.clearCanvas();
    this.changeHorSizeCanvas();
    this.ctx.drawImage(this.twoImg, 0, 0, this.width2, this.imgHeight);
    this.ctx.drawImage(this.threeImg, this.width2, 0, this.width1, this.imgHeight);
  }


  drawHorSecond() {
    this.clearCanvas();
    this.changeHorSizeCanvas();
    this.ctx.drawImage(this.twoImg, 0, 0, this.width1, this.imgHeight);
  }

  drawHorThree() {
    this.clearCanvas();
    this.changeHorSizeCanvas();
    this.ctx.drawImage(this.threeImg, 0, 0, this.width1, this.imgHeight);
  }

  drawHorThreeWithOther() {
    this.clearCanvas();
    this.changeHorSizeCanvas();
    this.ctx.drawImage(this.oneImg, 0, 0, this.width2, this.imgHeight);
    this.ctx.drawImage(this.threeImg, this.width2, 0, this.width1, this.imgHeight);
  }

  drawHorThreeAll() {
    this.clearCanvas();
    this.changeHorSizeCanvas();
    this.ctx.drawImage(this.oneImg, 0, 0, this.width1, this.imgHeight);
    this.ctx.drawImage(this.twoImg, this.width1, 0, this.width2, this.imgHeight);
    this.ctx.drawImage(this.threeImg, (this.width1 + this.width2), 0, this.width3, this.imgHeight);
  }

  drawVerFirstWhithSecond() {
    this.clearCanvas();
    this.changeVerSizeCanvas();
    this.ctx.drawImage(this.oneImg, 0, 0, this.imgWidth, this.height1);
    this.ctx.drawImage(this.twoImg, 0, this.height1, this.imgWidth, this.height2);
  }

  drawVerFirstWhithThird() {
    this.clearCanvas();
    this.changeVerSizeCanvas();
    this.ctx.drawImage(this.oneImg, 0, 0, this.imgWidth, this.height1);
    this.ctx.drawImage(this.threeImg, 0, this.height1, this.imgWidth, this.height2);
  }

  drawVerSecondWithFirst() {
    this.clearCanvas();
    this.changeVerSizeCanvas();
    this.ctx.drawImage(this.oneImg, 0, 0, this.imgWidth, this.height2);
    this.ctx.drawImage(this.twoImg, 0, this.height2, this.imgWidth, this.height1);
  }

  drawVerSecondWithThird() {
    this.clearCanvas();
    this.changeVerSizeCanvas();
    this.ctx.drawImage(this.twoImg, 0, 0, this.imgWidth, this.height2);
    this.ctx.drawImage(this.threeImg, 0, this.height2, this.imgWidth, this.height1);
  }

  drawVerThreeWithOne() {
    this.clearCanvas();
    this.changeVerSizeCanvas();
    this.ctx.drawImage(this.oneImg, 0, 0, this.imgWidth, this.height2);
    this.ctx.drawImage(this.threeImg, 0, this.height2, this.imgWidth, this.height1);
  }


  drawVerFirst() {
    this.clearCanvas();
    this.changeVerSizeCanvas();
    this.ctx.drawImage(this.oneImg, 0, 0, this.imgWidth, this.height1);
  }

  drawVerSecond() {
    this.clearCanvas();
    this.changeVerSizeCanvas();
    this.ctx.drawImage(this.twoImg, 0, 0, this.imgWidth, this.height1);
  }

  drawVerThree() {
    this.clearCanvas();
    this.changeVerSizeCanvas();
    this.ctx.drawImage(this.threeImg, 0, 0, this.imgWidth, this.height1);
  }

  drawVerThreeAll() {
    this.clearCanvas();
    this.changeVerSizeCanvas();
    this.ctx.drawImage(this.oneImg, 0, 0, this.imgWidth, this.height1);
    this.ctx.drawImage(this.twoImg, 0, this.height1, this.imgWidth, this.height2);
    this.ctx.drawImage(this.threeImg, 0, (this.height1 + this.height2), this.imgWidth, this.height3);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  changeHorSizeCanvas() {
    this.canvas.height = this.imgHeight;
    this.canvas.width = this.width1 + this.width2 + this.width3;
  }

  changeVerSizeCanvas() {
    this.canvas.width = this.imgWidth;
    this.canvas.height = this.height1 + this.height2 + this.height3;
  }
}

const getNewWidth = (img, imgHeight) => {
  const ratio = img.width / img.height;
  return ratio * imgHeight;
};

const getNewHeight = (img, imgWidth) => {
  const ratio = img.height / img.width;
  return ratio * imgWidth;
};


const initial = {
  horizontal: {
    twoPictures: [
      {
        findedCondition: 'twoPictures', findedImgName: 'one', couple: 'two', func: 'drawHorFirstWhithSecond',
      },
      {
        findedCondition: 'twoPictures', findedImgName: 'one', couple: 'three', func: 'drawHorFirstWhithThird',
      },
      {
        findedCondition: 'twoPictures', findedImgName: 'two', couple: 'one', func: 'drawHorSecondWithFirst',
      },
      {
        findedCondition: 'twoPictures', findedImgName: 'two', couple: 'three', func: 'drawHorSecondWithThird',
      },
      {
        findedCondition: 'twoPictures', findedImgName: 'three', func: 'drawHorThreeWithOther',
      },
    ],
    onePicture: [
      { findedCondition: 'onePicture', findedImgName: 'one', func: 'drawHorFirst' },
      { findedCondition: 'onePicture', findedImgName: 'two', func: 'drawHorSecond' },
      { findedCondition: 'onePicture', findedImgName: 'three', func: 'drawHorThree' },
    ],
    threePictures: [
      { findedCondition: 'threePictures', findedImgName: 'three', func: 'drawHorThreeAll' },
      { findedCondition: 'threePictures', findedImgName: 'one', func: 'drawHorThreeAll' },
      { findedCondition: 'threePictures', findedImgName: 'two', func: 'drawHorThreeAll' },
    ],
  },
  vertical: {
    twoPictures: [
      {
        findedCondition: 'twoPictures', findedImgName: 'one', couple: 'two', func: 'drawVerFirstWhithSecond',
      },
      {
        findedCondition: 'twoPictures', findedImgName: 'one', couple: 'three', func: 'drawVerFirstWhithThird',
      },
      {
        findedCondition: 'twoPictures', findedImgName: 'two', couple: 'one', func: 'drawVerSecondWithFirst',
      },
      {
        findedCondition: 'twoPictures', findedImgName: 'two', couple: 'three', func: 'drawVerSecondWithThird',
      },
      {
        findedCondition: 'twoPictures', findedImgName: 'three', func: 'drawVerThreeWithOther',
      },
    ],
    onePicture: [
      { findedCondition: 'onePicture', findedImgName: 'one', func: 'drawVerFirst' },
      { findedCondition: 'onePicture', findedImgName: 'two', func: 'drawVerSecond' },
      { findedCondition: 'onePicture', findedImgName: 'three', func: 'drawVerSecond' },
    ],
    threePictures: [
      { findedCondition: 'threePictures', findedImgName: 'three', func: 'drawVerThreeAll' },
      { findedCondition: 'threePictures', findedImgName: 'one', func: 'drawVerThreeAll' },
      { findedCondition: 'threePictures', findedImgName: 'two', func: 'drawVerThreeAll' },
    ],
  },
};


const drawImages = ({ state, imgParams, condition, coupleName }) => {
  const { imgName } = imgParams;
  const objPosition = initial[state.canvasPosition];
  const obj = objPosition[condition];
  const canvas = new Canvas({ state, condition, imgParams });
  if (condition === 'twoPictures') {
    const { func } = obj.find(({ findedCondition, findedImgName, couple }) => (
      (findedCondition === condition && findedImgName === imgName && couple === coupleName)
    ));
    canvas[func]();
  } else {
    console.log(condition);
    console.log(imgName);
    const { func } = obj.find(({ findedCondition, findedImgName }) => (
      (findedCondition === condition && findedImgName === imgName)
    ));
    canvas[func]();
  }
};


const getOptions = ({ state, img, imgName }) => {
  const { imgHeight, imgWidth } = state.images;
  const propertyActions = [
    {
      check: (name, st) => (name === 'one' && !st.imagesType.two && !st.imagesType.three),
      getCondition: () => 'onePicture',
      withCoupleUnderName: () => 'none',
      getImgParams: () => {
        const width1 = getNewWidth(img, imgHeight);
        const height1 = getNewHeight(img, imgWidth);
        return {
          imgName, width1, height1,
        };
      },
    },
    {
      check: (name, st) => (name === 'one' && st.imagesType.two && !st.imagesType.three),
      getCondition: () => 'twoPictures',
      withCoupleUnderName: () => 'two',
      getImgParams: () => {
        const width2 = getNewWidth(state.images.two, imgHeight);
        const width1 = getNewWidth(img, imgHeight);
        const height2 = getNewHeight(state.images.two, imgWidth);
        const height1 = getNewHeight(img, imgWidth);
        return {
          imgName, width1, height1, width2, height2,
        };
      },
    },
    {
      check: (name, st) => (name === 'one' && !st.imagesType.two && st.imagesType.three),
      getCondition: () => 'twoPictures',
      withCoupleUnderName: () => 'three',
      getImgParams: () => {
        const width2 = getNewWidth(state.images.three, imgHeight);
        const width1 = getNewWidth(img, imgHeight);
        const height2 = getNewHeight(state.images.three, imgWidth);
        const height1 = getNewHeight(img, imgWidth);
        return {
          imgName, width1, height1, width2, height2,
        };
      },
    },
    {
      check: (name, st) => (name === 'one' && st.imagesType.two && st.imagesType.three),
      getCondition: () => 'threePictures',
      withCoupleUnderName: () => 'none',
      getImgParams: () => {
        const width3 = getNewWidth(state.images.three, imgHeight);
        const width2 = getNewWidth(state.images.two, imgHeight);
        const width1 = getNewWidth(img, imgHeight);
        const height3 = getNewHeight(state.images.three, imgWidth);
        const height2 = getNewHeight(state.images.two, imgWidth);
        const height1 = getNewHeight(img, imgWidth);
        return {
          imgName, width1, height1, width2, height2, height3, width3,
        };
      },
    },
    {
      check: (name, st) => (name === 'two' && !st.imagesType.one && !st.imagesType.three),
      getCondition: () => 'onePicture',
      withCoupleUnderName: () => 'none',
      getImgParams: () => {
        const width1 = getNewWidth(img, imgHeight);
        const height1 = getNewHeight(img, imgWidth);
        return {
          imgName, width1, height1,
        };
      },
    },
    {
      check: (name, st) => (name === 'two' && st.imagesType.one && !st.imagesType.three),
      getCondition: () => 'twoPictures',
      withCoupleUnderName: () => 'one',
      getImgParams: () => {
        const width1 = getNewWidth(img, imgHeight);
        const width2 = getNewWidth(state.images.one, imgHeight);
        const height2 = getNewHeight(state.images.one, imgWidth);
        const height1 = getNewHeight(img, imgWidth);
        return {
          imgName, width1, height1, width2, height2,
        };
      },
    },
    {
      check: (name, st) => (name === 'two' && !st.imagesType.one && st.imagesType.three),
      getCondition: () => 'twoPictures',
      withCoupleUnderName: () => 'three',
      getImgParams: () => {
        const width1 = getNewWidth(state.images.three, imgHeight);
        const width2 = getNewWidth(img, imgHeight);
        const height2 = getNewHeight(img, imgWidth);
        const height1 = getNewHeight(state.images.three, imgWidth);
        return {
          imgName, width1, height1, width2, height2,
        };
      },
    },
    {
      check: (name, st) => (name === 'three' && !st.imagesType.one && !st.imagesType.two),
      getCondition: () => 'onePicture',
      withCoupleUnderName: () => 'none',
      getImgParams: () => {
        const width1 = getNewWidth(img, imgHeight);
        const height1 = getNewHeight(img, imgWidth);
        return {
          imgName, width1, height1,
        };
      },
    },
    {
      check: (name, st) => (name === 'three' && st.imagesType.one && st.imagesType.two),
      getCondition: () => 'threePictures',
      withCoupleUnderName: () => 'none',
      getImgParams: () => {
        const width1 = getNewWidth(state.images.one, imgHeight);
        const width2 = getNewWidth(state.images.two, imgHeight);
        const width3 = getNewWidth(img, imgHeight);
        const height1 = getNewHeight(state.images.one, imgWidth);
        const height2 = getNewHeight(state.images.two, imgWidth);
        const height3 = getNewHeight(img, imgWidth);
        return {
          imgName, width1, height1, width2, height2, width3, height3,
        };
      },
    },
    {
      check: (name, st) => (name === 'three' && st.imagesType.one && !st.imagesType.two),
      getCondition: () => 'twoPictures',
      withCoupleUnderName: () => 'one',
      getImgParams: () => {
        const width1 = getNewWidth(state.images.one, imgHeight);
        const width2 = getNewWidth(img, imgHeight);
        const height2 = getNewHeight(img, imgWidth);
        const height1 = getNewHeight(state.images.one, imgWidth);
        return {
          imgName, width1, height1, width2, height2,
        };
      },
    },
    {
      check: (name, st) => (name === 'three' && !st.imagesType.one && st.imagesType.two),
      getCondition: () => 'twoPictures',
      withCoupleUnderName: () => 'two',
      getImgParams: () => {
        const width1 = getNewWidth(state.images.two, imgHeight);
        const width2 = getNewWidth(img, imgHeight);
        const height2 = getNewHeight(img, imgWidth);
        const height1 = getNewHeight(state.images.two, imgWidth);
        return {
          imgName, width1, height1, width2, height2,
        };
      },
    },
  ];

  const { getCondition, getImgParams, withCoupleUnderName } = propertyActions.find(({ check }) => (
    check(imgName, state)));

  const condition = getCondition();
  const imgParams = getImgParams();
  const coupleName = withCoupleUnderName();
  const options = {
    state, imgParams, condition, coupleName,
  };
  return options;
};


const render = (state) => {
  const addNewFileInput = () => {
    const mainDiv = document.querySelector('#fileinput');
    const div = document.createElement('div');
    div.className = 'wraper3';
    div.innerHTML = `
      <div>
        <label for="fileinput3">Choose three file</label>
        <input type="file" id="fileinput3" class="file" name="three" accept=".jpg, .jpeg, .png">
      </div>`;
    state.numbersInput = '3';
    state.addNewFileInput = false;
    mainDiv.append(div);
    const fileinput3 = document.querySelector('#fileinput3');

    fileinput3.addEventListener('change', () => {
      const reader = new FileReader();
      // eslint-disable-next-line func-names
      reader.onload = function () {
        state.imagesType.three = reader.result;
        render(state);
      };
      reader.readAsDataURL(fileinput3.files[0]);
    });
  };

  const dellNewFileInput = () => {
    const fileinput3 = document.querySelector('.wraper3');
    fileinput3.remove();
    state.numbersInput = '2';
    state.addNewFileInput = false;
    state.imagesType.one = null;
    state.imagesType.two = null;
    state.imagesType.three = null;
    render(state);
  };

  Object.keys(state.imagesType).map((imgName) => {
    const img = state.images[imgName];
    img.src = state.imagesType[imgName];

    img.addEventListener('load', () => {
      const options = getOptions({ state, img, imgName });
      drawImages(options);
    });
  });

  if (state.addNewFileInput && state.numbersInput === '3') {
    addNewFileInput();
  }
  if (state.addNewFileInput && state.numbersInput === '2') {
    dellNewFileInput();
  }
};


const app = () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  const state = {
    canvasPosition: 'horizontal',
    imagesType: {
      one: null,
      two: null,
      three: null,
    },
    images: {
      one: new Image(),
      two: new Image(),
      three: new Image(),
      imgWidth: 200,
      imgHeight: 200,
    },
    canvas,
    ctx,
    addNewFileInput: false,
    numbersInput: null,
  };

  const items = [
    { name: 'horizontal', eventType: 'change' },
    { name: 'vertical', eventType: 'change' },
    { name: 'imgWidth', eventType: 'change' },
    { name: 'imgHeight', eventType: 'change' },
    { name: 'numberFiles', eventType: 'change' },
  ];


  items.forEach(({ name, eventType }) => {
    const element = document.querySelector(`#${name}`);
    element.addEventListener(eventType, ({ target }) => {
      if (target.type === 'radio') {
        state.canvasPosition = target.value;
        render(state);
      }
      if (target.type === 'number') {
        state.images[name] = target.value;
        render(state);
      }
      if (target.type === 'select-one') {
        state.addNewFileInput = true;
        state.numbersInput = target.value;
        render(state);
      }
    });
  });

  const inputsTypeFile = document.querySelectorAll('.file');
  inputsTypeFile.forEach((input) => {
    const reader = new FileReader();
    input.addEventListener('change', () => {
      // eslint-disable-next-line func-names
      reader.onload = function () {
        state.imagesType[input.name] = reader.result;
        render(state);
      };
      reader.readAsDataURL(input.files[0]);
    });
  });
  render(state);
};

app();
