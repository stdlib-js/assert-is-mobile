<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# IS_MOBILE

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Check if the current environment is a mobile device.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-mobile
```

</section>

<section class="usage">

## Usage

```javascript
var IS_MOBILE = require( '@stdlib/assert-is-mobile' );
```

#### IS_MOBILE

`Boolean` indicating if the current environment is a mobile device.

```javascript
var bool = IS_MOBILE;
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In order to determine whether the current environment is a mobile device, the implementation checks whether the User Agent contains the string "Mobi" per the [MDN recommendations][mdn-mobile].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var IS_MOBILE = require( '@stdlib/assert-is-mobile' );

console.log( IS_MOBILE );
// => <boolean>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-mobile.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-mobile

[test-image]: https://github.com/stdlib-js/assert-is-mobile/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-mobile/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-mobile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-mobile?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-mobile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-mobile/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-mobile/main/LICENSE

[mdn-mobile]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#mobile_tablet_or_desktop

</section>

<!-- /.links -->
