const initial = { opacity: 0, y: 20 };
const whileInView = {
  opacity: 1,
  y: 0,
  transition: { delay: 0, duration: 0.7 },
};
const viewport = { once: true, amount: 0.1 };

export { initial, viewport, whileInView };
