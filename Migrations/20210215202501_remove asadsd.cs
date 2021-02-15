using Microsoft.EntityFrameworkCore.Migrations;

namespace ASPReactApp.Migrations
{
    public partial class removeasadsd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tests_Comments_CommentId",
                table: "Tests");

            migrationBuilder.DropForeignKey(
                name: "FK_Tests_Guests_GuestId",
                table: "Tests");

            migrationBuilder.DropIndex(
                name: "IX_Tests_CommentId",
                table: "Tests");

            migrationBuilder.DropColumn(
                name: "CommentId",
                table: "Tests");

            migrationBuilder.AlterColumn<int>(
                name: "GuestId",
                table: "Tests",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TestCommentId",
                table: "Tests",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Tests_TestCommentId",
                table: "Tests",
                column: "TestCommentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tests_Guests_GuestId",
                table: "Tests",
                column: "GuestId",
                principalTable: "Guests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tests_Comments_TestCommentId",
                table: "Tests",
                column: "TestCommentId",
                principalTable: "Comments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tests_Guests_GuestId",
                table: "Tests");

            migrationBuilder.DropForeignKey(
                name: "FK_Tests_Comments_TestCommentId",
                table: "Tests");

            migrationBuilder.DropIndex(
                name: "IX_Tests_TestCommentId",
                table: "Tests");

            migrationBuilder.DropColumn(
                name: "TestCommentId",
                table: "Tests");

            migrationBuilder.AlterColumn<int>(
                name: "GuestId",
                table: "Tests",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "CommentId",
                table: "Tests",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tests_CommentId",
                table: "Tests",
                column: "CommentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tests_Comments_CommentId",
                table: "Tests",
                column: "CommentId",
                principalTable: "Comments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Tests_Guests_GuestId",
                table: "Tests",
                column: "GuestId",
                principalTable: "Guests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
