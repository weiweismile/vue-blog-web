// 单例模式????(后期详细看这一部分进行改进)

let instance = null;

const maskStyle = {
  background: 'rgba(0,0,0,.5)',
  'z-index': 1000,
  position: 'fixed',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
};

const createMask = () => {
    const tpl = document.createElement('div');
    Object.keys(maskStyle).forEach(style => {
      tpl.style[style] = maskStyle[style];
    });
    document.body.appendChild(tpl);
    return tpl;
}

const mask = () => {
  if (!instance) {
    instance = createMask();
  }
  instance.addEventListener('click', () => {
    instance.remove();
    instance = null;
  });
}


export default mask;
