// store/testimonials-store.js
import { create } from 'zustand';
import { testimonialsData } from '../Js';

export const useTestimonialsStore = create<any>((set, get) => ({
  // State
  testimonials: testimonialsData,
  currentIndex: 0,
  isAutoPlaying: false,
  autoPlayInterval: null,
  
  // Getters
  getCurrentTestimonial: () => {
    const { testimonials, currentIndex } = get();
    return testimonials[currentIndex];
  },
  
  // Actions
  nextTestimonial: () => {
    const { testimonials, currentIndex } = get();
    const nextIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    set({ currentIndex: nextIndex });
  },
  
  prevTestimonial: () => {
    const { testimonials, currentIndex } = get();
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    set({ currentIndex: prevIndex });
  },
  
  goToTestimonial: (index:any) => {
    const { testimonials } = get();
    if (index >= 0 && index < testimonials.length) {
      set({ currentIndex: index });
    }
  },

   // Auto-play functionality
  startAutoPlay: () => {
    const { isAutoPlaying } = get();
    if (isAutoPlaying) return;
    
    const interval = setInterval(() => {
      const { nextTestimonial } = get();
      nextTestimonial();
    }, 4000); // 2 seconds
    
    set({ 
      isAutoPlaying: true,
      autoPlayInterval: interval 
    });
  },
  
  stopAutoPlay: () => {
    const { isAutoPlaying, autoPlayInterval } = get();
    if (!isAutoPlaying || !autoPlayInterval) return;
    
    clearInterval(autoPlayInterval);
    set({ 
      isAutoPlaying: false,
      autoPlayInterval: null 
    });
  },
  
  toggleAutoPlay: () => {
    const { isAutoPlaying, stopAutoPlay, startAutoPlay } = get();
    if (isAutoPlaying) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  },
  
  // If you want to add testimonials dynamically
  addTestimonial: (testimonial:any) => {
    set((state:any) => ({
      testimonials: [...state.testimonials, { ...testimonial, id: state.testimonials.length + 1 }]
    }));
  },
}));
