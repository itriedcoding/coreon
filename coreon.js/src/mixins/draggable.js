// draggable.js

export default {
  data() {
    return {
      isDragging: false,
      dragStartX: 0,
      dragStartY: 0,
      elementStartX: 0,
      elementStartY: 0,
    };
  },
  methods: {
    handleMouseDown(event) {
      this.isDragging = true;
      this.dragStartX = event.clientX;
      this.dragStartY = event.clientY;
      this.elementStartX = this.$el.offsetLeft;
      this.elementStartY = this.$el.offsetTop;

      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseup', this.handleMouseUp);
    },
    handleMouseMove(event) {
      if (!this.isDragging) return;

      const deltaX = event.clientX - this.dragStartX;
      const deltaY = event.clientY - this.dragStartY;

      this.$el.style.left = `${this.elementStartX + deltaX}px`;
      this.$el.style.top = `${this.elementStartY + deltaY}px`;
    },
    handleMouseUp() {
      this.isDragging = false;
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
    },
  },
  mounted() {
    this.$el.style.position = 'absolute';
    this.$el.addEventListener('mousedown', this.handleMouseDown);
  },
  beforeDestroy() {
    this.$el.removeEventListener('mousedown', this.handleMouseDown);
  },
};