import os

from setuptools import setup, find_packages

here = os.path.abspath(os.path.dirname(__file__))
with open(os.path.join(here, 'README.txt')) as f:
    README = f.read()
with open(os.path.join(here, 'CHANGES.txt')) as f:
    CHANGES = f.read()

requires = [
    'pyramid',
    'pyramid_mako',
    'pyramid_stripe',
    'pyramid_debugtoolbar',
    'pyramid_tm',
    'SQLAlchemy',
    'transaction',
    'zope.sqlalchemy',
    'waitress',
    'psycopg2',
    'stripe',
    ]

setup_requires = [
    'pytest-runner',
]

tests_require = [
    'webtest',
    'pytest',
]

setup(name='rlfarm',
      version='0.0',
      description='rlfarm',
      long_description=README + '\n\n' + CHANGES,
      classifiers=[
        "Programming Language :: Python",
        "Framework :: Pyramid",
        "Topic :: Internet :: WWW/HTTP",
        "Topic :: Internet :: WWW/HTTP :: WSGI :: Application",
        ],
      author='',
      author_email='',
      url='',
      keywords='web wsgi bfg pylons pyramid',
      packages=find_packages(),
      include_package_data=True,
      zip_safe=False,
      test_suite='rlfarm',
      install_requires=requires,
      setup_requires=setup_requires,
      tests_require=tests_require,
      entry_points="""\
      [paste.app_factory]
      main = rlfarm:main
      [console_scripts]
      initialize_rlfarm_db = rlfarm.scripts.initializedb:main
      """,
      )
