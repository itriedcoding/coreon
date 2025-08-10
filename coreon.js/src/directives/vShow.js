// vShow.js - Directive for toggling visibility in Coreon.js framework

export default function vShow(el, binding) {
    // Set the initial visibility based on the binding value
    el.style.display = binding.value ? '' : 'none';

    // Watch for changes in the binding value
    const updateVisibility = (newValue) => {
        el.style.display = newValue ? '' : 'none';
    };

    // Create a reactive watcher for the binding value
    binding.instance.$watch(binding.expression, updateVisibility);

    // Cleanup function to remove the watcher when the element is destroyed
    return () => {
        binding.instance.$unwatch(updateVisibility);
    };
}