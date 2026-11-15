import $ from 'jquery';
import 'foundation-sites/dist/css/foundation.min.css';
import './foundation-custom.css';

window.$ = window.jQuery = $;

import('foundation-sites/dist/js/foundation.min.js').then(() => {
    $(document).foundation();
});