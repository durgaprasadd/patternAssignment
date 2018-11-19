#! /bin/bash
set -e
./scripts/run_test.sh create_rectangle.js app_test_data/input/input_file_rectangle app_test_data/output/output_file_rectangle
./scripts/run_test.sh create_diamond.js app_test_data/input/input_file_diamond app_test_data/output/output_file_diamond
./scripts/run_test.sh create_triangle.js app_test_data/input/input_file_triangle app_test_data/output/output_file_triangle
