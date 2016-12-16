// Generated by CoffeeScript 1.12.1
(function() {
  var CND, O, badge, cli, debug, echo, help, info, rpr, run_copy_benchmarks, step, urge, warn, whisper;

  CND = require('cnd');

  rpr = CND.rpr;

  badge = 'BASIC-STREAM-BENCHMARKS-2/CLI';

  debug = CND.get_logger('debug', badge);

  warn = CND.get_logger('warn', badge);

  urge = CND.get_logger('urge', badge);

  info = CND.get_logger('info', badge);

  help = CND.get_logger('help', badge);

  whisper = CND.get_logger('whisper', badge);

  echo = CND.echo.bind(CND);

  step = require('coffeenode-suspend').step;

  O = require('./options');

  cli = (require('nash'))();

  run_copy_benchmarks = function(data, flags, done) {
    return step(function*(resume) {
      var ref;
      urge("run 'copy' benchmarks");
      O.pass_through_count = (ref = flags['n']) != null ? ref : 0;
      yield (require('./copy-lines-with-pull-stream')).main(resume);
      yield (require('./copy-lines-with-readable-stream')).main(resume);
      yield (require('./copy-lines-with-pipedreams')).main(resume);
      return done();
    });
  };

  cli.command('copy').handler(run_copy_benchmarks);

  cli["default"]().handler(function(data, flags, done) {
    var command;
    command = flags['_'];
    warn("unrecognized command " + (rpr(command)));
    return done();
  });

  cli.run(process.argv, function() {
    whisper("finished");
    return null;
  });

}).call(this);

//# sourceMappingURL=cli.js.map