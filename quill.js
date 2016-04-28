import Quill from './core';

import { AlignClass as Align } from './formats/align';
import { DirectionClass as Direction } from './formats/direction';
import { IndentClass as Indent } from './formats/indent';

import Blockquote from './formats/blockquote';
import Header from './formats/header';
import List, { ListItem } from './formats/list';

import { BackgroundStyle as Background } from './formats/background';
import { ColorStyle as Color } from './formats/color';
import { FontClass as Font } from './formats/font';
import { SizeClass as Size } from './formats/size';

import Bold from './formats/bold';
import Italic from './formats/italic';
import Link from './formats/link';
import Script from './formats/script';
import Strike from './formats/strike';
import Underline from './formats/underline';

import Formula from './formats/formula';
import Image from './formats/image';
import Video from './formats/video';

import { Code as InlineCode } from './formats/code';

import ImageTooltip from './modules/image-tooltip';
import LinkTooltip from './modules/link-tooltip';
import Toolbar from './modules/toolbar';
import CodeHighlighter, { CodeBlock, CodeToken } from './modules/code-highlighter';

import Icons from './ui/icons';
import Picker from './ui/picker';
import ColorPicker from './ui/color-picker';
import IconPicker from './ui/icon-picker';

import BubbleTheme from './themes/bubble';
import SnowTheme from './themes/snow';


Quill.register({
  'formats/align': Align,
  'formats/direction': Direction,
  'formats/indent': Indent,

  'formats/background': Background,
  'formats/color': Color,
  'formats/font': Font,
  'formats/size': Size,

  'formats/blockquote': Blockquote,
  'formats/code-block': CodeBlock,
  'formats/header': Header,
  'formats/list': List,

  'formats/bold': Bold,
  'formats/code': InlineCode,
  'formats/italic': Italic,
  'formats/link': Link,
  'formats/script': Script,
  'formats/strike': Strike,
  'formats/underline': Underline,

  'formats/formula': Formula,
  'formats/image': Image,
  'formats/video': Video,

  'formats/code-block/token': CodeToken,
  'formats/list/item': ListItem,

  'modules/code-highlighter': CodeHighlighter,
  'modules/image-tooltip': ImageTooltip,
  'modules/link-tooltip': LinkTooltip,
  'modules/toolbar': Toolbar,

  'themes/bubble': BubbleTheme,
  'themes/snow': SnowTheme,

  'ui/icons': Icons,
  'ui/picker': Picker,
  'ui/icon-picker': IconPicker,
  'ui/color-picker': ColorPicker
});


module.exports = Quill;
