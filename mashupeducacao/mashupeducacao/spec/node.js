
require.paths.unshift('spec', '/usr/lib/ruby/gems/1.8/gems/jspec-4.3.3/lib', 'lib')
require('jspec')
require('unit/spec.helper')
require('libeduca')

JSpec
  .exec('spec/unit/spec.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures', failuresOnly: true })
  .report()

