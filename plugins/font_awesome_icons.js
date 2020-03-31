import Vue from 'vue'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faGem } from '@fortawesome/free-regular-svg-icons/faGem'

import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons/faRedditAlien'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'

import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons/faPowerOff'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft'
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons/faExpandArrowsAlt'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb'
import { faList } from '@fortawesome/free-solid-svg-icons/faList'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons/faHandPointRight'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import { faThLarge } from '@fortawesome/free-solid-svg-icons/faThLarge'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle'

// config.autoAddCss = false

library.add(faGem, 
  faUser, 
  faPowerOff, 
  faQuoteLeft, 
  faCode, 
  faExpandArrowsAlt, 
  faLightbulb, 
  faFacebookF, 
  faTwitter, 
  faRedditAlien, 
  faLinkedinIn, 
  faInstagram, 
  faHandPointRight, 
  faList,
  faShoppingCart,
  faExclamationTriangle,
  faCheckCircle,
  faThLarge,
  faExclamationCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)