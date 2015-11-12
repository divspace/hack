var elixir = require('laravel-elixir');

elixir.config.assetsPath = '';
elixir.config.publicPath = '';
elixir.config.css.sass.folder = 'scss'

elixir(function(mix) {
  if(!elixir.config.production) {
    mix.sass('hack.scss');
  } else {
    mix.sass('hack.scss', 'css/hack.min.css');
  }
});
