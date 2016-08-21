import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

require('./stylesheets/main.scss');

class Main extends React.Component {
    constructor() {
        super();
        this._handleUpdateText = this._handleUpdateText.bind(this);
        this.state = {
            markdown: '# h1 Heading\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading\n\n\n## Horizontal Rules\n\n___\n\n---\n\n***\n\n## Emphasis\n\n**This is bold text**\n\n__This is bold text__\n\n*This is italic text*\n\n_This is italic text_\n\n~~Strikethrough~~\n\n\n## Blockquotes\n\n\n> Blockquotes can also be nested...\n>> ...by using additional greater-than signs right next to each other...\n> > > ...or with spaces between arrows.\n\n\n## Lists\n\nUnordered\n\n+ Create a list by starting a line with `+`, `-`, or `*`\n+ Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces new list start:\n    * Ac tristique libero volutpat at\n    + Facilisis in pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n+ Very easy!\n\nOrdered\n\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n3. Integer molestie lorem at massa\n\n\n1. You can use sequential numbers...\n1. ...or keep all the numbers as `1.`\n\nStart numbering with offset:\n\n57. foo\n1. bar\n\n\n## Code\n\nInline `code`\n\nIndented code\n\n    // Some comments\n    line 1 of code\n    line 2 of code\n    line 3 of code\n\n\nBlock code "fences"\n\n```\nSample text here...\n```\n\n## Links\n\n[link text](http://emiliogozo.github.io)\n\n[link with title](http://emiliogozo.github.io/ "title text!")\n\n## Images\n\n![Minion](https://octodex.github.com/images/minion.png)\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")\n\nLike links, Images also have a footnote style syntax\n\n![Alt text][id]\n\nWith a reference later in the document defining the URL location:\n\n[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"'
        };
    }
    render() {
        return (
            <div className='row full-height'>
                <div className='form-group col-sm-6 full-height'>
                    <textarea className='form-control col-sm-6 full-height' value={this.state.markdown} onChange={this._handleUpdateText} />
                </div>
                <div className='col-sm-6 full-height'>
                    <div className='result-area full-height' dangerouslySetInnerHTML={this._markupToHTML()}></div>
                </div>
            </div>
        );
    }
    _handleUpdateText(e) {
        this.setState({
            markdown: e.target.value
        });
    }
    _markupToHTML() {
        return {__html: marked(this.state.markdown, { sanitize: true })};
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);