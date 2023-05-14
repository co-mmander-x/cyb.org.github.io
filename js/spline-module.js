// Importation de Spline
import { Application } from '@splinetool/runtime';

// Toutes les scènes 3D 
const mockupChat = document.getElementById('phone-mockup__chat');
const sceneChat = new Application(mockupChat);
sceneChat.load('https://prod.spline.design/C9k3mse1sAIWeF2R/scene.splinecode');

const mockupAlert = document.getElementById('phone-mockup__alert');
const sceneAlert = new Application(mockupAlert);
sceneAlert.load('https://prod.spline.design/3F28S6moFRdECWss/scene.splinecode');

const mockupLocalisation = document.getElementById('phone-mockup__localisation');
const sceneLocalisation = new Application(mockupLocalisation);
sceneLocalisation.load('https://prod.spline.design/zsJfAms92IPpJGFB/scene.splinecode');

const canvasBlueBlop = document.getElementById('blue-blop__animated');
const sceneBlueBlop = new Application(canvasBlueBlop);
sceneBlueBlop.load('https://prod.spline.design/H58TqEnsJV4XRfKI/scene.splinecode');

const canvasVioletBlop = document.getElementById('violet-blop__animated');
const sceneVioletBlop = new Application(canvasVioletBlop);
sceneVioletBlop.load('https://prod.spline.design/mH4MoCiaeHJWh4SP/scene.splinecode');



