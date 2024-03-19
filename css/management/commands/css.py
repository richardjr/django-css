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
        # Change to the directory of the script
        script_dir = os.path.dirname(os.path.realpath(__file__))
        os.chdir(script_dir)
        # Perform the operation using both the parent project directory and the script directory
        if options['operation'] == 'build':
            sass.compile(dirname=('../../frameworks/bootstrap/scss', f'{calling_dir}/static/css/'), output_style='compressed')



