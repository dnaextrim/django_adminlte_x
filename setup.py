#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import os

from setuptools import find_packages, setup

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

__import__("adminlte")

setup(
    name='django-adminlte-x',
    version='0.22.1',
    packages=find_packages(),
    include_package_data=True,
    license='MIT License',
    description='AdminLTE Bootstrap Theme packaged for Django',
    long_description=open('README.md', 'r').read(),
    url='https://github.com/dnaextrim/django_adminlte_x',
    author='Dony Wahyu Isprananda',
    author_email='dna.extrim@gmail.com',
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        'Environment :: Web Environment',
        'Framework :: Django',
        'Framework :: Django :: 1.9',  # replace "X.Y" as appropriate
        'Framework :: Django :: 1.10',  # replace "X.Y" as appropriate
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',  # example license
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        # Replace these appropriately if you are stuck on Python 2.
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    ],
    keywords='django bootstrap adminlte theme',
    install_requires=[
        "django-appconf>=0.6.0"
    ],
    zip_safe=False,
)