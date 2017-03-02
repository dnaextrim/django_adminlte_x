#**Django-AdminLTE-X**


###**Django AdminLTE Template**
AdminLTE Bootstrap Theme packaged for Django

**Quick Start**
Install the pip package:
```
pip install django_adminlte_x
```

Add `adminlte` to your `INSTALLED_APPS` setting like this:
```
INSTALLED_APPS = (
	'adminlte'
	...
)
```

It is almost done. You can check if this is working by adding a template

**Adding navigation**

```python
from adminlte.templatetags.menu import Menu

Menu.add(label, link, icon, id, parent)
```

**Set Model Icon**
```python
from adminlte.templatetags.menu import Menu

Menu.Menu.set_model_icon('AppName', 'fa fa-plus')
```

**Assets**
```
Assets.js([
    'jquery.min.js'
])

Assets.css([
	'stylesheet':[
		'bootstrap.min.css'
	]
])
```
