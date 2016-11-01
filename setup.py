from setuptools import setup

setup(
    name='django_adminlte_x',
    version='0.3',
    packages=['django_adminlte_x'],
    license='MIT License',
    description='AdminLTE Bootstrap Theme packaged for Django',
    long_description=open('README.md', 'r').read(),
    url='https://github.com/dnaextrim/django_adminlte_x',
    author='Dony Wahyu Isprananda',
    author_email='dna.extrim@gmail.com',
    classifiers=[],
    keywords='django bootstrap adminlte theme',
    install_requires=[
        'django>=1.9',
    ],
)