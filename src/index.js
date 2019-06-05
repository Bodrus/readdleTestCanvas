/* eslint-disable func-names */
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
    this.height1 = imgParams.height1 || 0;
    this.height2 = imgParams.height2 || 0;
    this.height3 = imgParams.height3 || 0;
    this.width1 = imgParams.width1 || 0;
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
    this.ctx.drawImage(this.threeImg, this.width1, 0, this.width3, this.imgHeight);
  }

  drawHorSecondWithFirst() {
    this.clearCanvas();
    this.changeHorSizeCanvas();
    this.ctx.drawImage(this.oneImg, 0, 0, this.width1, this.imgHeight);
    this.ctx.drawImage(this.twoImg, this.width1, 0, this.width2, this.imgHeight);
  }

  drawHorSecondWithThird() {
    this.clearCanvas();
    this.changeHorSizeCanvas();
    this.ctx.drawImage(this.twoImg, 0, 0, this.width2, this.imgHeight);
    this.ctx.drawImage(this.threeImg, this.width2, 0, this.width3, this.imgHeight);
  }


  drawHorSecond() {
    this.clearCanvas();
    this.changeHorSizeCanvas();
    this.ctx.drawImage(this.twoImg, 0, 0, this.width2, this.imgHeight);
  }

  drawHorThree() {
    this.clearCanvas();
    this.changeHorSizeCanvas();
    this.ctx.drawImage(this.threeImg, 0, 0, this.width1, this.imgHeight);
  }

  drawHorThreeWithOne() {
    this.clearCanvas();
    this.changeHorSizeCanvas();
    this.ctx.drawImage(this.oneImg, 0, 0, this.width1, this.imgHeight);
    this.ctx.drawImage(this.threeImg, this.width1, 0, this.width3, this.imgHeight);
  }

  drawHorThreeWithTwo() {
    this.clearCanvas();
    this.changeHorSizeCanvas();
    this.ctx.drawImage(this.twoImg, 0, 0, this.width2, this.imgHeight);
    this.ctx.drawImage(this.threeImg, this.width2, 0, this.width3, this.imgHeight);
  }

  drawHorThreeWithAll() {
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
    this.ctx.drawImage(this.oneImg, 0, 0, this.imgWidth, this.height1);
    this.ctx.drawImage(this.twoImg, 0, this.height1, this.imgWidth, this.height2);
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
    this.ctx.drawImage(this.oneImg, 0, 0, this.imgWidth, this.height1);
    this.ctx.drawImage(this.threeImg, 0, this.height1, this.imgWidth, this.height3);
  }

  drawVerThreeWithTwo() {
    this.clearCanvas();
    this.changeVerSizeCanvas();
    this.ctx.drawImage(this.twoImg, 0, 0, this.imgWidth, this.height2);
    this.ctx.drawImage(this.threeImg, 0, this.height2, this.imgWidth, this.height3);
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

const addNewFileInput = (state) => {
  const mainDiv = document.querySelector('#fileinput');
  const div = document.createElement('div');
  div.className = 'wraper3';
  div.innerHTML = `
      <div>
        <label class="label" for="fileinput3">Choose third file</label>
        <input type="file" id="fileinput3" class="file" name="three" accept=".jpg, .jpeg, .png">
      </div>`;
  mainDiv.append(div);
  const fileinput3 = document.querySelector('#fileinput3');
  const reader = new FileReader();
  fileinput3.addEventListener('change', () => {
    reader.onload = function () {
      state.imagesType.three = reader.result;
      render(state);
    };
    reader.readAsDataURL(fileinput3.files[0]);
  });
  state.listeners.isAddNewFileInput = false;
};

const renderImages = (state, mesage) => {
  Object.keys(state.imagesType).forEach((imgName) => {
    if (state.imagesType[imgName]) {
      const img = state.images[imgName];
      img.src = state.imagesType[imgName];
      const options = getOptions({ state, img, imgName });
      drawImages(options);
    }
  });
  state.listeners[mesage] = false;
};

const dellFileInput = (state) => {
  const fileinput3 = document.querySelector('.wraper3');
  if (!fileinput3) {
    return;
  }
  fileinput3.remove();
  state.listeners.isAddNewFileInput = false;
  state.imagesType.one = null;
  state.imagesType.two = null;
  state.imagesType.three = null;
  render(state);
};

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
      { findedCondition: 'twoPictures', findedImgName: 'one', couple: 'two', func: 'drawHorFirstWhithSecond' },
      { findedCondition: 'twoPictures', findedImgName: 'one', couple: 'three', func: 'drawHorFirstWhithThird' },
      { findedCondition: 'twoPictures', findedImgName: 'two', couple: 'one', func: 'drawHorSecondWithFirst' },
      { findedCondition: 'twoPictures', findedImgName: 'two', couple: 'three', func: 'drawHorSecondWithThird' },
      { findedCondition: 'twoPictures', findedImgName: 'three', couple: 'one', func: 'drawHorThreeWithOne' },
      { findedCondition: 'twoPictures', findedImgName: 'three', couple: 'two', func: 'drawHorThreeWithTwo' },
    ],
    onePicture: [
      { findedCondition: 'onePicture', findedImgName: 'one', func: 'drawHorFirst' },
      { findedCondition: 'onePicture', findedImgName: 'two', func: 'drawHorSecond' },
      { findedCondition: 'onePicture', findedImgName: 'three', func: 'drawHorThree' },
    ],
    threePictures: [
      { findedCondition: 'threePictures', findedImgName: 'three', func: 'drawHorThreeWithAll' },
      { findedCondition: 'threePictures', findedImgName: 'one', func: 'drawHorThreeWithAll' },
      { findedCondition: 'threePictures', findedImgName: 'two', func: 'drawHorThreeWithAll' },
    ],
  },
  vertical: {
    twoPictures: [
      { findedCondition: 'twoPictures', findedImgName: 'one', couple: 'two', func: 'drawVerFirstWhithSecond' },
      { findedCondition: 'twoPictures', findedImgName: 'one', couple: 'three', func: 'drawVerFirstWhithThird' },
      { findedCondition: 'twoPictures', findedImgName: 'two', couple: 'one', func: 'drawVerSecondWithFirst' },
      { findedCondition: 'twoPictures', findedImgName: 'two', couple: 'three', func: 'drawVerSecondWithThird' },
      { findedCondition: 'twoPictures', findedImgName: 'three', couple: 'one', func: 'drawVerThreeWithOne' },
      { findedCondition: 'twoPictures', findedImgName: 'three', couple: 'two', func: 'drawVerThreeWithTwo'},
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


const drawImages = ({
  state, imgParams, condition, coupleWithName,
}) => {
  const { imgName } = imgParams;
  const objPosition = initial[state.canvasPosition];
  const obj = objPosition[condition];
  const canvas = new Canvas({ state, condition, imgParams });
  if (condition === 'twoPictures') {
    const { func } = obj.find(({ findedCondition, findedImgName, couple }) => (
      (findedCondition === condition && findedImgName === imgName && couple === coupleWithName)
    ));
    canvas[func]();
  } else {
    const { func } = obj.find(({ findedCondition, findedImgName }) => (
      (findedCondition === condition && findedImgName === imgName)
    ));
    canvas[func]();
  }
};


const getOptions = ({ state, img, imgName }) => {
  const { imgHeight, imgWidth } = state.images;

  if (imgName === 'one' && !state.imagesType.two && !state.imagesType.three) {
    const condition = 'onePicture';
    const coupleWithName = 'none';
    const width1 = getNewWidth(img, imgHeight);
    const height1 = getNewHeight(img, imgWidth);
    const imgParams = {
      imgName, width1, height1,
    };
    return {
      state, condition, coupleWithName, imgParams,
    };
  }

  if (imgName === 'one' && state.imagesType.two && !state.imagesType.three) {
    const condition = 'twoPictures';
    const coupleWithName = 'two';
    const width2 = getNewWidth(state.images.two, imgHeight);
    const width1 = getNewWidth(img, imgHeight);
    const height2 = getNewHeight(state.images.two, imgWidth);
    const height1 = getNewHeight(img, imgWidth);
    const imgParams = {
      imgName, width1, height1, width2, height2,
    };
    return {
      state, condition, coupleWithName, imgParams,
    };
  }

  if (imgName === 'one' && !state.imagesType.two && state.imagesType.three) {
    const condition = 'twoPictures';
    const coupleWithName = 'three';
    const width3 = getNewWidth(state.images.three, imgHeight);
    const width1 = getNewWidth(img, imgHeight);
    const height3 = getNewHeight(state.images.three, imgWidth);
    const height1 = getNewHeight(img, imgWidth);
    const imgParams = {
      imgName, width1, height1, width3, height3,
    };
    return {
      state, condition, coupleWithName, imgParams,
    };
  }

  if (imgName === 'one' && state.imagesType.two && state.imagesType.three) {
    const condition = 'threePictures';
    const coupleWithName = 'none';
    const width3 = getNewWidth(state.images.three, imgHeight);
    const width2 = getNewWidth(state.images.two, imgHeight);
    const width1 = getNewWidth(img, imgHeight);
    const height3 = getNewHeight(state.images.three, imgWidth);
    const height2 = getNewHeight(state.images.two, imgWidth);
    const height1 = getNewHeight(img, imgWidth);
    const imgParams = {
      imgName, width1, height1, width2, height2, height3, width3,
    };
    return {
      state, condition, coupleWithName, imgParams,
    };
  }

  if (imgName === 'two' && !state.imagesType.one && !state.imagesType.three) {
    const condition = 'onePicture';
    const coupleWithName = 'none';
    const width2 = getNewWidth(img, imgHeight);
    const height2 = getNewHeight(img, imgWidth);
    const imgParams = {
      imgName, width2, height2,
    };
    return {
      state, condition, coupleWithName, imgParams,
    };
  }

  if (imgName === 'two' && state.imagesType.one && !state.imagesType.three) {
    const condition = 'twoPictures';
    const coupleWithName = 'one';
    const width1 = getNewWidth(state.images.one, imgHeight);
    const width2 = getNewWidth(img, imgHeight);
    const height2 = getNewHeight(img, imgWidth);
    const height1 = getNewHeight(state.images.one, imgWidth);
    const imgParams = {
      imgName, width1, height1, width2, height2,
    };
    return {
      state, condition, coupleWithName, imgParams,
    };
  }

  if (imgName === 'two' && !state.imagesType.one && state.imagesType.three) {
    const condition = 'twoPictures';
    const coupleWithName = 'three';
    const width3 = getNewWidth(state.images.three, imgHeight);
    const width2 = getNewWidth(img, imgHeight);
    const height2 = getNewHeight(img, imgWidth);
    const height3 = getNewHeight(state.images.three, imgWidth);
    const imgParams = {
      imgName, width3, height3, width2, height2,
    };
    return {
      state, condition, coupleWithName, imgParams,
    };
  }

  if (imgName === 'two' && state.imagesType.one && state.imagesType.three) {
    const condition = 'threePictures';
    const coupleWithName = 'none';
    const width1 = getNewWidth(state.images.one, imgHeight);
    const width2 = getNewWidth(img, imgHeight);
    const width3 = getNewWidth(state.images.three, imgHeight);
    const height1 = getNewHeight(state.images.one, imgWidth);
    const height2 = getNewHeight(img, imgWidth);
    const height3 = getNewHeight(state.images.three, imgWidth);
    const imgParams = {
      imgName, width1, height1, width2, height2, width3, height3,
    };
    return {
      state, condition, coupleWithName, imgParams,
    };
  }

  if (imgName === 'three' && !state.imagesType.one && !state.imagesType.two) {
    const condition = 'onePicture';
    const coupleWithName = 'none';
    const width1 = getNewWidth(img, imgHeight);
    const height1 = getNewHeight(img, imgWidth);
    const imgParams = {
      imgName, width1, height1,
    };
    return {
      state, condition, coupleWithName, imgParams,
    };
  }

  if (imgName === 'three' && state.imagesType.one && state.imagesType.two) {
    const condition = 'threePictures';
    const coupleWithName = 'none';
    const width1 = getNewWidth(state.images.one, imgHeight);
    const width2 = getNewWidth(state.images.two, imgHeight);
    const width3 = getNewWidth(img, imgHeight);
    const height1 = getNewHeight(state.images.one, imgWidth);
    const height2 = getNewHeight(state.images.two, imgWidth);
    const height3 = getNewHeight(img, imgWidth);
    const imgParams = {
      imgName, width1, height1, width2, height2, width3, height3,
    };
    return {
      state, condition, coupleWithName, imgParams,
    };
  }

  if (imgName === 'three' && state.imagesType.one && !state.imagesType.two) {
    const condition = 'twoPictures';
    const coupleWithName = 'one';
    const width1 = getNewWidth(state.images.one, imgHeight);
    const width3 = getNewWidth(img, imgHeight);
    const height3 = getNewHeight(img, imgWidth);
    const height1 = getNewHeight(state.images.one, imgWidth);
    const imgParams = {
      imgName, width1, height1, width3, height3,
    };
    return {
      state, condition, coupleWithName, imgParams,
    };
  }

  if (imgName === 'three' && !state.imagesType.one && state.imagesType.two) {
    const condition = 'twoPictures';
    const coupleWithName = 'two';
    const width2 = getNewWidth(state.images.two, imgHeight);
    const width3 = getNewWidth(img, imgHeight);
    const height3 = getNewHeight(img, imgWidth);
    const height2 = getNewHeight(state.images.two, imgWidth);
    const imgParams = {
      imgName, width3, height3, width2, height2,
    };
    return {
      state, condition, coupleWithName, imgParams,
    };
  }
  return 'error';
};


const render = (state) => {
  const {
    isAddNewFileInput,
    numbersInput,
    isPositionChanget,
    isSizeChanget,
  } = state.listeners;

  if (isAddNewFileInput && numbersInput === '2') {
    dellFileInput(state);
  }
  if (isAddNewFileInput && numbersInput === '3') {
    addNewFileInput(state);
  }
  if (isPositionChanget) {
    renderImages(state, 'isPositionChange');
  }
  if (isSizeChanget) {
    renderImages(state, 'isSizeChanget');
  } else {
    Object.keys(state.imagesType).forEach((imgName) => {
      if (state.imagesType[imgName]) {
        const img = state.images[imgName];
        img.src = state.imagesType[imgName];
        img.addEventListener('load', () => {
          const options = getOptions({ state, img, imgName });
          drawImages(options);
        });
      }
    });
  }
};


const app = () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  const state = {
    listeners: {
      isPositionChanget: false,
      isSizeChanget: false,
      isAddNewFileInput: false,
      numbersInput: null,
    },
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
    canvasPosition: 'horizontal',
    canvas,
    ctx,
  };

  const items = [
    { name: 'fileinput1', eventType: 'change', position: 'one' },
    { name: 'fileinput2', eventType: 'change', position: 'two' },
    { name: 'horizontal', eventType: 'change' },
    { name: 'vertical', eventType: 'change' },
    { name: 'imgWidth', eventType: 'change' },
    { name: 'imgHeight', eventType: 'change' },
    { name: 'numberFiles', eventType: 'change' },
  ];


  items.forEach(({ name, eventType, position }) => {
    const element = document.querySelector(`#${name}`);
    element.addEventListener(eventType, ({ target }) => {
      const reader = new FileReader();
      if (target.type === 'file') {
        reader.onload = function () {
          state.imagesType[position] = reader.result;
          render(state);
        };
        reader.readAsDataURL(element.files[0]);
      }
      if (target.type === 'radio') {
        state.canvasPosition = target.value;
        state.listeners.isPositionChanget = true;
        render(state);
      }
      if (target.type === 'number') {
        state.images[name] = target.value;
        state.listeners.isSizeChanget = true;
        render(state);
      }
      if (target.type === 'select-one') {
        state.listeners.isAddNewFileInput = true;
        state.listeners.numbersInput = target.value;
        render(state);
      }
    });
  });
  render(state);
};

app();
