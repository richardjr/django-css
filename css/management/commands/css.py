from django.core.management import BaseCommand
from django.conf import settings
import sass
import os

class Command(BaseCommand):
    help = 'css framework'

    # add the arguments
    def add_arguments(self, parser):
        parser.add_argument('operation', type=str, help='operation to perform')

    def handle(self, *args, **options):
        # We are called from the parent project directory so save the current directory
        calling_dir = os.getcwd()
        app = settings.SETTINGS_MODULE
        # remove the last part of the module
        app = app.split('.')[0]
        # Change to the directory of the script
        script_dir = os.path.dirname(os.path.realpath(__file__))
        os.chdir(script_dir)

        frameworks = settings.CSS_FRAMEWORKS if hasattr(settings, 'CSS_FRAMEWORKS') else ['bootstrap', 'fontawesome']

        # Perform the operation using both the parent project directory and the script directory
        if options['operation'] == 'build':
            for framework in frameworks:
                sass.compile(dirname=(f'../../frameworks/{framework}/scss', f'{calling_dir}/{app}/static/css/'), output_style='compressed')

                # Specific to the fontawesome framework
                # Copy the webfonts directory to the static directory
                if framework == 'fontawesome':
                    os.system(f'cp -r ../../frameworks/fontawesome/webfonts {calling_dir}/{app}/static/')



