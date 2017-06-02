class Assets:
    css = {}
    js = {}
    type = ''

    def __init__(self, type):
        self.type = type

    def render(self):
        ret = ''

        if self.type.lower() == 'css':
            if not isinstance(self.css, dict):
                for r in self.css:
                    ret += '<link rel="stylesheet" type="text/css" href="/static/%s" />\n' % r
            else:
                for rel in self.css:
                    for r in self.css[rel]:
                        ret += '<link rel="%s" type="text/css" href="/static/%s" />\n' % (rel, r)

        elif self.type.lower() == 'js':
            for r in self.js:
                ret += '<script type="text/javascript" src="/static/%s"></script>\n' % (r)

        return ret


def css(assets):
    Assets.css = assets


def js(assets):
    Assets.js = assets