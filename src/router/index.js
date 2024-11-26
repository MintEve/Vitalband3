import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Tu página principal
import AboutView from '../views/AboutView.vue'; // Tu página de Características
import CompanyView from '../views/CompanyView.vue';
import ContactView from '../views/ContactView.vue';
import LoginView from '@/views/LoginView.vue';
import RegistroView from '@/views/RegistroView.vue';


const routes = [
  { path: '/', name: 'home', component: HomeView }, // Ruta para Inicio
  { path: '/acerca', name: 'acerca', component: AboutView }, // Ruta para Características
  { path: '/company', name: 'company', component: CompanyView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/registro', name: 'registro', component: RegistroView },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
